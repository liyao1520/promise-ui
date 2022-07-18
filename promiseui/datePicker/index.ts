import type { App } from 'vue'
import DatePicker from './src/datePicker'

export * from './src/datePicker-types'

export { DatePicker }

export default {
  title: 'DatePicker 日期选择器',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(DatePicker.name, DatePicker)
  }
}
