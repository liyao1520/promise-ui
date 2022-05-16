import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

import promiseUI from '../../../promiseui/vue-promiseui'
import { AirplaneSharp, AccessibilitySharp, Ban } from '@vicons/ionicons5'
// 引入scss

import '../../../promiseui/styles/index.scss'

export function registerComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component('AirplaneSharp', AirplaneSharp)
  app.component('AccessibilitySharp', AccessibilitySharp)
  app.component('Ban', Ban)
  app.use(promiseUI)
}
