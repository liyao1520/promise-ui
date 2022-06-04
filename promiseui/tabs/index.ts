import type { App } from 'vue'
import Tabs from './src/tabs'
import TabPane from './src/tab-pane'

export * from './src/tabs-types'

export { Tabs, TabPane }

export default {
  title: 'Tabs 标签页',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(Tabs.name, Tabs)
    app.component(TabPane.name, TabPane)
  }
}
