import type { App } from 'vue'
import Icon from './src/icon'
import IconConfigProvider from './src/iconConfigProvider'

export { Icon, IconConfigProvider }
export * from './src/icon-types'

export default {
  title: 'Icon 图标',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Icon.name, Icon)
    app.component(IconConfigProvider.name, IconConfigProvider)
  }
}
