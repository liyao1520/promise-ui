import type { App } from 'vue'
import ButtonInstall, { Button } from './button'
import SpaceInstall, { Space } from './space'
import IconInstall, { Icon } from './icon'
import MessageInstall, { Message } from './message'
import InputInstall, { Input } from './input'

const installs = [ButtonInstall, SpaceInstall, IconInstall, MessageInstall, InputInstall]

export { Button, Space, Icon, Message }

export default {
  version: '0.0.1',
  // 实现vue3插件，需要实现一个install方法
  // 将来接收一个App实例，createApp()
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
