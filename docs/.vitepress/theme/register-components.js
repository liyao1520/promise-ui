import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

import promiseUI from '../../../promiseui/vue-promiseui'

// 引入scss

import '../../../promiseui/styles/index.scss'

export function registerComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.use(promiseUI)
}
