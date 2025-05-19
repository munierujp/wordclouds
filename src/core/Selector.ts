export const Selector = {
  CloseButton: '#closeBtn',
  DownloadButton: '#downloadBtn',
  FileMenuLink: '#wizFileMenu .nav-link',
  FileTypeJpgButton: '#toolControls [data-filetype="jpg"]',
  FileTypePngButton: '#offcanvasSidebar [data-filetype="png"]',
  ImportCsvLink: '#wordlistMenu [data-task="importCSV"]',
  OpenWordCloudLink: '#fileMenu [data-task="openWordcloud"]',
  OpenWordListLink: '#offcanvasSidebar .browseBtn',
  SaveButton: '#applyBtn',
  SaveImageLink: '#fileMenu [data-task="saveImageAs,hd"]',
  SaveWordCloudLink: '#fileMenu [data-task="saveWordcloud"]',
  WordListApplyButton: '#offcanvasWordList .applyBtn',
  WordListCloseButton: '#offcanvasWordList .btn-close',
  WordListLink: '#wizWordList .nav-link'
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Selector = typeof Selector[keyof typeof Selector]
