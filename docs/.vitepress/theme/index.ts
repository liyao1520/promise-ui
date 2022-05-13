import Theme from '../theme-default'
import Button from '../../../promiseui/button'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'

// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('p-button', Button)
    registerComponents(app)
  }
}
