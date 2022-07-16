import { vuePlugin, addImportMap } from 'vitepress-demo-editor'

import {
  AirplaneSharp,
  AccessibilitySharp,
  Ban,
  SearchSharp,
  ChatboxSharp,
  PawSharp,
  CheckmarkSharp,
  CloseSharp,
  MusicalNotesSharp,
  FlameSharp,
  HappyOutline
} from '@vicons/ionicons5'
// 引入scss
import '../../../promiseui/styles/index.scss'

import promiseui from '../../../promiseui/vue-promiseui'
import { App } from 'vue'
const icons = {
  AirplaneSharp,
  AccessibilitySharp,
  Ban,
  SearchSharp,
  ChatboxSharp,
  PawSharp,
  CheckmarkSharp,
  CloseSharp,
  MusicalNotesSharp,
  FlameSharp,
  HappyOutline
}
let first = true
export function registerComponents(app: App) {
  addImportMap('@vicons/ionicons5', icons)
  app.use(vuePlugin, {
    defaultDirection: 'column'
  })
  addImportMap('promiseui-vue', promiseui)
  app.use(promiseui)

  app.mixin({
    async mounted() {
      if (!first) return
      first = false
      await import('../../../promiseui/vue-promiseui').then((promiseUI) => {
        addImportMap('promiseui-vue', promiseUI)
        app.use(promiseUI.default)
      })
    }
  })
}
