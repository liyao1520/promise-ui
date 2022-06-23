import { App, createApp, CSSProperties } from 'vue'
import { IButtonType } from '../../button'
import { ICommonSize } from '../../types'
import MessageBoxComponent from './messageBox'
export interface IMessageBoxConfig {
  title?: string
  cancelButtonText?: string
  confirmButtonText?: string
  content?: string
  showClose?: boolean
  blockScroll?: boolean
  beforeClose?: (type: 'close' | 'confirm' | 'cancel') => Promise<boolean>
  buttonSize: ICommonSize
  customClass: string
  customStyle: string | CSSProperties
}
class MessageBox {
  constructor() {}
  onAfterLeave(app: App<Element>) {
    app.unmount()
  }
  private openMessageBox(
    {
      title,
      content,
      cancelButtonText,
      confirmButtonText,
      blockScroll,
      beforeClose,
      buttonSize,
      customClass,
      customStyle,
      showClose
    }: IMessageBoxConfig,
    confirmButtonType?: IButtonType
  ) {
    return new Promise<void>((resolve, reject) => {
      const wrapper = document.createElement('div')
      document.body.appendChild(wrapper)
      const _this = this
      const app = createApp({
        setup() {
          return () => (
            <MessageBoxComponent
              title={title}
              cancelButtonText={cancelButtonText}
              confirmButtonText={confirmButtonText}
              content={content}
              confirmButtonType={confirmButtonType}
              onAfterLeave={() => _this.onAfterLeave(app)}
              onCancel={() => reject('cancel')}
              onConfirm={() => resolve()}
              onClose={() => reject('close')}
              beforeClose={beforeClose}
              buttonSize={buttonSize}
              customClass={customClass}
              customStyle={customStyle}
              showClose={showClose}
              blockScroll={blockScroll}
            />
          )
        }
      })
      app.mount(wrapper)
    })
  }
  public success(config: IMessageBoxConfig) {
    return this.openMessageBox(config, 'success')
  }
  public info(config: IMessageBoxConfig) {
    return this.openMessageBox(config, 'info')
  }
  public warning(config: IMessageBoxConfig) {
    return this.openMessageBox(config, 'warning')
  }
  public error(config: IMessageBoxConfig) {
    return this.openMessageBox(config, 'danger')
  }
  public open(config: IMessageBoxConfig) {
    return this.openMessageBox(config, 'primary')
  }
}

export default new MessageBox()
