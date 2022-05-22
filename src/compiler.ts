import * as compiler from 'vue/compiler-sfc'
type ErrorFn = (errors: (compiler.CompilerError | SyntaxError)[]) => void
export default class Compiler {
  private selector: string
  private scriptEl: HTMLScriptElement | null = null
  private templateUrl = ''
  private scriptUrl = ''
  private onError: ErrorFn = () => {}
  constructor(selector: string, onError?: ErrorFn) {
    this.selector = selector
    if (onError) this.onError = onError
  }
  private createScriptEl() {
    // 有 scriptEl 了,需要删除一个scriptEl ,再添加一个新的 scriptEl,js代码才能执行
    // 修改innerHTML 无法执行
    if (this.scriptEl) {
      this.scriptEl.remove()
    }
    this.scriptEl = document.createElement('script')
    this.scriptEl.type = 'module'
    document.body.appendChild(this.scriptEl)
  }
  private compilerTemplate(ast: compiler.SFCParseResult) {
    const temp = compiler.compileTemplate({
      source: ast.descriptor.template?.content || '',
      id: Math.random() + '',
      filename: 'none' //大概不需要文件名
    })
    const template = temp.code
    return template
  }
  private compilerScript(ast: compiler.SFCParseResult) {
    let script = ast.descriptor.script?.content || ''
    script = script.replace('export default', 'const _script =')
    return `
      import {render as __render} from "${this.templateUrl}"
      ${script}
      _script.render = __render;
      export default _script;
    `
  }
  private runCode() {
    const main = `
    import { createApp } from 'vue'
    import App from '${this.scriptUrl}'
    createApp(App).mount('${this.selector}')
    `
    // 插入script
    if (this.scriptEl) {
      this.scriptEl.innerHTML = main
    }
  }
  handleError(ast: compiler.SFCParseResult) {
    if (ast.errors.length) {
      this.onError(ast.errors)
      return
    }
  }
  compileCode(code: string): void {
    // 清空之前的 ObjectURL
    this.revokeAllObjectURL()
    // 创建createScriptEl
    this.createScriptEl()
    const ast = compiler.parse(code)
    // 如果有错误,给出错误信息
    this.handleError(ast)

    const template = this.compilerTemplate(ast)
    this.templateUrl = createObjectURL(template)

    const script = this.compilerScript(ast)
    this.scriptUrl = createObjectURL(script)
    // 运行代码
    this.runCode()
  }
  revokeAllObjectURL() {
    if (this.templateUrl) {
      URL.revokeObjectURL(this.templateUrl)
    }
    if (this.scriptUrl) {
      URL.revokeObjectURL(this.scriptUrl)
    }
  }
}

function createObjectURL(content: any, type?: string): string {
  if (!type) {
    type = 'application/javascript'
  }
  return URL.createObjectURL(new Blob([content], { type: 'application/javascript' }))
}
