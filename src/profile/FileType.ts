export const FileType = {
  Jpg: 'jpg',
  Png: 'png'
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type FileType = typeof FileType[keyof typeof FileType]
