import type { App } from 'vue';
import Overlay from './src/overlay';

export * from './src/overlay-types';

export { Overlay };

export default {
  title: 'Overlay 遮罩层',
  category: '通用',
  status: '100%',
  install(app: App): void {
    app.component(Overlay.name, Overlay);
  },
};
  