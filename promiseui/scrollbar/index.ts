import type { App } from 'vue'
import Scrollbar from './src/scrollbar'

export * from './src/scrollbar-types'

export { Scrollbar }

export default {
  title: 'Scrollbar 滚动条',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Scrollbar.name, Scrollbar)
  }
}
