const prefix = 'promiseui'
class Theme {
  private themes: any = {}
  styleElement: HTMLStyleElement
  constructor() {
    this.styleElement = document.createElement('style')
    const head = document.getElementsByTagName('head')[0]
    head.appendChild(this.styleElement)
  }
  // 注册
  register(name: string, theme: any) {
    const styleStr = Object.entries(theme)
      .map(([key, value]) => `--${prefix}-${key} : ${value}`)
      .join(';')
    this.themes[name] = styleStr
  }
  use(name: string) {
    const styleStr = this.themes[name]
    this.styleElement.textContent = `:root{${styleStr}}`
  }
}
export default Theme
