import { vuePlugin, addImportMap } from 'vitepress-demo-editor'
import 'vitepress-demo-editor/dist/style.css'
import promiseuiType from '../../../dist/promiseui/vue-promiseui.d.ts?raw'
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
    onMonacoCreated(monaco) {
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        `
        declare module 'promiseui-vue' { ${promiseuiType} }
      `,
        `promiseui-vue`
      )
    }
  })

  app.mixin({
    async mounted() {
      if (!first) return
      first = false
      await import('../../../promiseui').then((promiseUI) => {
        addImportMap('promiseui-vue', promiseUI)
        app.use(promiseUI.default)
      })
    }
  })
}
