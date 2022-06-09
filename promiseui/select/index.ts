import type { App } from 'vue';
import Select from './src/select';

export * from './src/select-types';

export { Select };

export default {
  title: 'Select 选择器',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(Select.name, Select);
  },
};
  