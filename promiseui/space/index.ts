import type { App } from 'vue'
import Space from './src/space'

export * from './src/space-types'

export { Space }

export default {
  title: 'Space 间隔',
  category: '布局',
  status: '100%',
  install(app: App): void {
    app.component(Space.name, Space)
  }
}
