import promiseUI from '../../../promiseui/vue-promiseui'
import { vuePlugin } from '../plugins/vitepress-demo-editor'
import { AirplaneSharp, AccessibilitySharp, Ban } from '@vicons/ionicons5'
// 引入scss
import '../../../promiseui/styles/index.scss'

export function registerComponents(app) {
  app.use(vuePlugin)
  app.use(promiseUI)
  app.component('AirplaneSharp', AirplaneSharp)
  app.component('AccessibilitySharp', AccessibilitySharp)
  app.component('Ban', Ban)
}
