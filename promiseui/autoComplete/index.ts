import type { App } from 'vue'
import AutoComplete from './src/autoComplete'

export * from './src/autoComplete-types'

export { AutoComplete }

export default {
  title: 'AutoComplete 自动填充',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(AutoComplete.name, AutoComplete)
  }
}
