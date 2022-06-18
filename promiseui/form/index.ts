import type { App } from 'vue';
import Form from './src/form';

export * from './src/form-types';

export { Form };

export default {
  title: 'Form 表单',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Form.name, Form);
  },
};
  