import sharp from 'sharp'

export const resizeImage = async (path: string, maxWidth: number): Promise<void> => {
  const input = sharp(path)
  const { width } = await input.metadata()

  if (width === undefined) {
    return
  }

  if (width <= maxWidth) {
    return
  }

  await input.resize({ width: maxWidth }).toFile(path)
}
