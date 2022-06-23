import type { App } from 'vue'

import MessageBox from './src/messageBox-service'

export * from './src/messageBox-types'

export { MessageBox }

export default {
  title: 'MessageBox 消息弹出框',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.config.globalProperties.$messageBox = MessageBox
  }
}
