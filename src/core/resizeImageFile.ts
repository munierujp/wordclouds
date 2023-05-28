import sharp from 'sharp'

export const resizeImageFile = async (path: string, maxWidth: number): Promise<void> => {
  const input = sharp(path)
  const { width } = await input.metadata()

  if (width === undefined || width <= maxWidth) {
    return
  }

  const buffer = await input.resize({ width: maxWidth }).toBuffer()
  const output = sharp(buffer)
  await output.toFile(path)
}
