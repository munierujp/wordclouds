export const Selector = {
  ApplyWordListButton: '#offcanvasWordList .applyBtn',
  CloseButton: '#closeBtn',
  DownloadButton: '#downloadBtn',
  FileMenuLink: '#wizFileMenu .nav-link',
  ImportCsvLink: '#wordlistMenu [data-task="importCSV"]',
  JpgButton: '#toolControls [data-filetype="jpg"]',
  OpenWordCloudLink: '#fileMenu [data-task="openWordcloud"]',
  OpenWordListLink: '#toolControls .browseBtn',
  PngButton: '#toolControls [data-filetype="png"]',
  SaveButton: '#applyBtn',
  SaveImageLink: '#fileMenu [data-task="saveImageAs,hd"]',
  SaveWordCloudLink: '#fileMenu [data-task="saveWordcloud"]',
  WordListLink: '#wizWordList .nav-link'
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Selector = typeof Selector[keyof typeof Selector]
