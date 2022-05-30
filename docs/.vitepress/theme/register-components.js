import * as promiseUI from '../../../promiseui/vue-promiseui'
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

export function registerComponents(app) {
  app.use(vuePlugin)
  app.use(promiseUI.default)

  //
  addImportMap('promiseui', promiseUI)
  addImportMap('@vicons/ionicons5', icons)
}
