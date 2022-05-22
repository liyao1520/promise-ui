import promiseUI from '../../../promiseui/vue-promiseui'
import { vuePlugin } from '../plugins/vitepress-demo-editor'
// 引入scss
import '../../../promiseui/styles/index.scss'

export function registerComponents(app) {
  app.use(vuePlugin)
  app.use(promiseUI)
}
