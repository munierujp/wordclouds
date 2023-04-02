export const beautifyJson = (json: string): string => {
  const parsed: unknown = JSON.parse(json)
  return JSON.stringify(parsed, undefined, 2)
}
