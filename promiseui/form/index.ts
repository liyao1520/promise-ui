import type { App } from 'vue'
import Form from './src/form'
import FormItem from './src/form-item'

export * from './src/form-types'

export { Form, FormItem }

export default {
  title: 'Form 表单',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Form.name, Form)
    app.component(FormItem.name, FormItem)
  }
}
