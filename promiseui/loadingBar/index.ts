import type { App } from 'vue';
import LoadingBar from './src/loadingBar';

export * from './src/loadingBar-types';

export { LoadingBar };

export default {
  title: 'LoadingBar 加载条',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(LoadingBar.name, LoadingBar);
  },
};
  