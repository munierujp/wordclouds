export const Selector = {
  DownloadButton: '#toolControls .download .btn',
  FileMenu: '#fileMenu',
  FileMenuLink: '#wizFileMenu .nav-link',
  JpgButton: '#toolControls .btn[data-filetype="jpg"]',
  Modal: '#myModal',
  OpenWordCloudLink: '#fileMenu .dropdown-item[data-task="openWordcloud"]',
  PngButton: '#toolControls .btn[data-filetype="png"]',
  RenderToast: '#renderToast',
  SaveButton: '#applyBtn',
  SaveImageLink: '#fileMenu .dropdown-item[data-task="saveImageAs,hd"]',
  ToolControls: '#toolControls'
} as const
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Selector = typeof Selector[keyof typeof Selector]
