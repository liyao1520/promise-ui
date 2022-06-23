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
import RadioInstall, { Radio, RadioGroup } from './radio'
import CheckboxInstall, { Checkbox, CheckboxGroup } from './checkbox'
import SelectInstall, { Select } from './select'
import ScrollbarInstall, { Scrollbar } from './scrollbar'
import VirtualScrollInstall, { VirtualScroll } from './virtualScroll'
import TagInstall, { Tag } from './tag'
import AutoCompleteInstall, { AutoComplete } from './autoComplete'
import FormInstall, { Form, FormItem } from './form'
import PopoverInstall, { Popover } from './popover'
import ModalInstall, { Modal } from './modal'
import MessageBoxInstall, { MessageBox } from './messageBox'

const installs = [
  ButtonInstall,
  SpaceInstall,
  IconInstall,
  MessageInstall,
  InputInstall,
  OverlayInstall,
  DropdownInstall,
  TabsInstall,
  SwitchInstall,
  RadioInstall,
  CheckboxInstall,
  SelectInstall,
  ScrollbarInstall,
  VirtualScrollInstall,
  TagInstall,
  AutoCompleteInstall,
  FormInstall,
  PopoverInstall,
  ModalInstall,
  MessageBoxInstall
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
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Select,
  Scrollbar,
  VirtualScroll,
  Tag,
  AutoComplete,
  Form,
  FormItem,
  Popover,
  Modal,
  MessageBox
}

export default {
  version: '0.0.1',
  // 实现vue3插件，需要实现一个install方法
  // 将来接收一个App实例，createApp()
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
