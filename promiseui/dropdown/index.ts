import type { App } from 'vue';
import Dropdown from './src/dropdown';

export * from './src/dropdown-types';

export { Dropdown };

export default {
  title: 'Dropdown 下拉菜单',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(Dropdown.name, Dropdown);
  },
};
  