import { App, ComponentPublicInstance, createApp } from 'vue'
import { inherit } from '../../shared/utils'
import { MessageFn, messageTypes, IMessage } from './message-types'
import MessageComponent from './message'
const MARGIN = 15 // message 之前的距离
const TOP = 60 // message 距离顶部px
let messageList: any[] = []
let messageId = 0

const Message: MessageFn = (config) => {
  return new Promise((resolve) => {
    const { message = '' } = config
    const app = createApp(MessageComponent, {
      ...config,
      message,
      onDestory: () => destoryMessage(app, vm, resolve)
    })
    // 挂载
    const vm = mountMessage(app)
  })
}
messageTypes.forEach((type) => {
  Message[type] = function (message, config = {}) {
    return Message({
      ...config,
      type: type,
      message
    })
  }
})

function mountMessage(app: App) {
  const wraper = document.createElement('div')
  const vm = app.mount(wraper)
  setMessageTop(vm)
  const el = document.body.appendChild(wraper.firstElementChild!) as HTMLElement
  // vm 添加两个属性
  inherit(vm, {
    _messageId: getMessageId(),
    _offsetHeight: el.offsetHeight
  })
  // 添加到数组中
  messageList.push(vm)
  return vm
}

// 销毁时
function destoryMessage(
  app: App,
  vm: ComponentPublicInstance,
  resolve: (value: PromiseLike<undefined> | undefined) => void
) {
  const _vm = vm as any

  // 卸载app
  app.unmount()

  resolve(undefined) //通过.then可以处理 onclose 事件

  messageList = messageList.filter((item) => item._messageId !== _vm._messageId)

  // 需要去掉的高度
  const removedHeight = _vm._offsetHeight + MARGIN
  // 重新计算Top
  resetMessageListTop(removedHeight)
}

function resetMessageListTop(removedHeight: number) {
  for (const vm of messageList) {
    vm.setTop(-removedHeight)
  }
}
function setMessageTop(vm: any) {
  let top = TOP
  for (const item of messageList) {
    top += item._offsetHeight + MARGIN
  }

  vm.setTop(top)
}
function getMessageId() {
  return messageId++
}

export default Message as IMessage
