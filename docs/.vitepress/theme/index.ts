// import theme from './theme-default'
import theme from './theme-default'
import { h } from 'vue'

import myLayout from './myLayout'

// 插件的组件，主要是demo组件
import { registerComponents } from './register-components.js'

export default {
  ...theme,
  Layout: () => {
    return h(myLayout)
  },
  enhanceApp({ app }) {
    registerComponents(app)
  }
}
