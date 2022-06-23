import type { App } from 'vue'
import useLoadingBar from './src/loadingBarService'
export { useLoadingBar }

export default {
  title: 'LoadingBar 加载条',
  category: '导航',
  status: '100%',
  install(app: App): void {}
}
