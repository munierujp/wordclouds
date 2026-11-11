import { test } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, copyFile, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { gunzipSync } from 'node:zlib'
import { parse } from 'csv-parse/sync'
import { contrastRatio, prepareWebsiteWordCloudFile, readableColor } from './prepareWebsiteWordCloudFile.ts'

test('keeps readable colors and corrects dark, pale and saturated colors for each theme', () => {
  for (const background of ['#faf9f6', '#191c1e']) {
    for (const color of ['#000000', '#ffffff', '#F0DB4F', '#14327B', '#AFC3BC', '#FF0033']) {
      const result = readableColor(color, background)
      assert.ok(contrastRatio(result, background) >= 4.5, `${color} on ${background}`)
      if (contrastRatio(color, background) >= 4.5) assert.equal(result, color.toLowerCase())
    }
  }
})

for (const [theme, background] of [['light', '#faf9f6'], ['dark', '#191c1e']] as const) {
  test(`preserves the canonical words and weights in the transparent ${theme} template`, async () => {
    const directory = await mkdtemp(join(tmpdir(), 'website-cloud-'))
    try {
      const path = join(directory, 'template.wcld3')
      await copyFile(`data/munieru-jp-${theme}.wcld3`, path)
      await prepareWebsiteWordCloudFile(path, 'data/words.csv', background)
      const cloud = JSON.parse(gunzipSync(await readFile(path)).toString())
      const rows: { word: string, weight: string }[] = parse(await readFile('data/words.csv'), { bom: true, columns: true })
      assert.equal(cloud.config.document_backgroundColor, 'rgba(0, 0, 0, 0)')
      assert.deepEqual(cloud.wordList.map((word: { text: string, frequency: number }) => [word.text, word.frequency]), rows.map(row => [row.word, Number(row.weight)]))
      for (const word of cloud.wordList) assert.ok(contrastRatio(word.color, background) >= 4.5)
    } finally {
      await rm(directory, { recursive: true, force: true })
    }
  })
}
