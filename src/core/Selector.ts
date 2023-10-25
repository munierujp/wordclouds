export const Selector = {
  ApplyWordListButton: '#offcanvasWordList .applyBtn',
  DownloadButton: '#toolControls .download .btn',
  FileMenuLink: '#wizFileMenu .nav-link',
  ImportCsvLink: '#wordlistMenu .dropdown-item[data-task="importCSV"]',
  JpgButton: '#toolControls .btn[data-filetype="jpg"]',
  OpenWordCloudLink: '#fileMenu .dropdown-item[data-task="openWordcloud"]',
  OpenWordListLink: '#toolControls .browseBtn',
  PngButton: '#toolControls .btn[data-filetype="png"]',
  SaveAsJpgButton: 'button:has-text("Save as JPG")',
  SaveButton: '#applyBtn',
  SaveImageLink: '#fileMenu .dropdown-item[data-task="saveImageAs,hd"]',
  SaveWordCloudLink: '#fileMenu .dropdown-item[data-task="saveWordcloud"]',
  WordListLink: '#wizWordList .nav-link'
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Selector = typeof Selector[keyof typeof Selector]
