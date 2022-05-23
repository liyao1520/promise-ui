import type { App } from 'vue'
import Message from './src/message-service'

export * from './src/message-types'

export { Message }

export default {
  title: 'Message 消息',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.config.globalProperties.$message = Message
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $message: typeof Message
  }
}
