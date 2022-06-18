import type { App } from 'vue';
import 自动填充 from './src/自动填充';

export * from './src/自动填充-types';

export { 自动填充 };

export default {
  title: '自动填充 autoComplete',
  category: '数据录入',
  status: '100%',
  install(app: App): void {
    app.component(自动填充.name, 自动填充);
  },
};
  