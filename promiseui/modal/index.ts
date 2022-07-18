import type { App } from 'vue'
import Modal from './src/modal'

export * from './src/modal-types'

export { Modal }

export default {
  title: 'Modal 模态框',
  category: '反馈',
  status: '100%',
  install(app: App): void {
    app.component(Modal.name, Modal)
  }
}
