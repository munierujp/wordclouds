import { readFile, writeFile } from 'node:fs/promises'
import { gunzipSync, gzipSync } from 'node:zlib'
import { parse } from 'csv-parse/sync'

type RGB = [number, number, number]

const rgb = (color: string): RGB => {
  if (!/^#[\da-f]{6}$/i.test(color)) throw new Error(`Invalid color: ${color}`)
  return [1, 3, 5].map((offset) => Number.parseInt(color.slice(offset, offset + 2), 16)) as RGB
}

const luminance = (color: RGB): number => {
  const [r, g, b] = color.map((value) => {
    const channel = value / 255
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  }) as RGB
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export const contrastRatio = (foreground: string, background: string): number => {
  const a = luminance(rgb(foreground))
  const b = luminance(rgb(background))
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
}

export const readableColor = (color: string, background: string): string => {
  const original = rgb(color)
  const target = luminance(rgb(background)) < 0.179 ? 255 : 0
  for (let step = 0; step <= 100; step++) {
    const candidate = '#' + original.map((value) => Math.round(value + (target - value) * step / 100).toString(16).padStart(2, '0')).join('')
    if (contrastRatio(candidate, background) >= 4.5) return candidate
  }
  throw new Error(`Cannot adjust ${color} for ${background}`)
}

interface WordRow { weight: string, word: string, color: string, url: string }

// Import the canonical list before upload so its individual colors can be
// adjusted for the website theme instead of reintroduced by the CSV import UI.
export const prepareWebsiteWordCloudFile = async (templatePath: string, csvPath: string, background: string): Promise<void> => {
  const cloud = JSON.parse(gunzipSync(await readFile(templatePath)).toString())
  const rows: WordRow[] = parse(await readFile(csvPath), { bom: true, columns: true, skip_empty_lines: true })
  const palette = cloud.config.word_colors as string[]
  cloud.wordList = rows.map((row, index) => {
    const frequency = Number(row.weight)
    if (!row.word || !Number.isFinite(frequency) || frequency <= 0) throw new Error(`Invalid word row: ${index + 2}`)
    const color = row.color || palette[index % palette.length]
    if (color === undefined) throw new Error('The website palette must not be empty')
    return {
      frequency,
      text: row.word,
      color: readableColor(color, background),
      ...(row.url ? { url: row.url } : {})
    }
  })
  cloud.config.document_backgroundColor = 'rgba(0, 0, 0, 0)'
  await writeFile(templatePath, gzipSync(JSON.stringify(cloud)))
}
