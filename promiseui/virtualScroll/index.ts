import type { App } from 'vue';
import VirtualScroll from './src/virtualScroll';

export * from './src/virtualScroll-types';

export { VirtualScroll };

export default {
  title: 'VirtualScroll 虚拟滚动',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(VirtualScroll.name, VirtualScroll);
  },
};
  