import { vuePlugin, addImportMap } from '../plugins/vitepress-demo-editor'
import {
  AirplaneSharp,
  AccessibilitySharp,
  Ban,
  SearchSharp,
  ChatboxSharp,
  PawSharp
} from '@vicons/ionicons5'
// 引入scss
import '../../../promiseui/styles/index.scss'

const icons = { AirplaneSharp, AccessibilitySharp, Ban, SearchSharp, ChatboxSharp, PawSharp }
let first = true
export function registerComponents(app) {
  addImportMap('@vicons/ionicons5', icons)
  app.use(vuePlugin)
  app.mixin({
    async mounted() {
      if (!first) return
      first = false
      await import('../../../promiseui/vue-promiseui').then((promiseUI) => {
        addImportMap('promiseui', promiseUI)
        app.use(promiseUI.default)
      })
    }
  })
}
