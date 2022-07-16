// import Theme from './promiseui-theme'
import theme from 'vitepress/theme'
import myLayout from './myLayout'

// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'

export default {
  ...theme,
  Layout: myLayout,
  enhanceApp({ app }) {
    registerComponents(app)
  }
}
