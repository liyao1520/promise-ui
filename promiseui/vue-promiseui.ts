import type { App } from 'vue'
import ButtonInstall, { Button } from './button'
import SpaceInstall, { Space } from './space'
import IconInstall, { Icon } from './icon'
import MessageInstall, { Message } from './message'
import InputInstall, { Input } from './input'
import OverlayInstall, { Overlay } from './overlay'
import DropdownInstall, { Dropdown, DropdownItem } from './dropdown'
import TabsInstall, { Tabs, TabPane } from './tabs'
import SwitchInstall, { Switch } from './switch'

const installs = [
  ButtonInstall,
  SpaceInstall,
  IconInstall,
  MessageInstall,
  InputInstall,
  OverlayInstall,
  DropdownInstall,
  TabsInstall,
  SwitchInstall
]

export {
  Button,
  Space,
  Icon,
  Message,
  Input,
  Overlay,
  Dropdown,
  DropdownItem,
  Tabs,
  TabPane,
  Switch
}

export default {
  version: '0.0.1',
  // 实现vue3插件，需要实现一个install方法
  // 将来接收一个App实例，createApp()
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
