import Theme from './promiseui-theme'

// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    registerComponents(app)
  }
}
