import Theme from './promiseui-theme'
import { setTheme } from '../plugins/vitepress-demo-editor'
// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
    setTimeout(() => setTheme('xcode-default'), 3000)
  }
}
