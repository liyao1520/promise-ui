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
import LoadingBarInstall, { useLoadingBar } from './loadingBar'
import TableInstall, { Table } from './table'
import DatePickerInstall, { DatePicker } from './datePicker'

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
  MessageBoxInstall,
  LoadingBarInstall,
  TableInstall,
  DatePickerInstall
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
  MessageBox,
  useLoadingBar,
  Table,
  DatePicker
}

export default {
  version: '0.0.1',
  // ??????vue3???????????????????????????install??????
  // ??????????????????App?????????createApp()
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
