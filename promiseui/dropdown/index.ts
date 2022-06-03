import type { App } from 'vue'
import Dropdown from './src/dropdown'

import DropdownItem from './src/dropdown-item'

export * from './src/dropdown-types'

export { Dropdown, DropdownItem }

export default {
  title: 'Dropdown 下拉菜单',
  category: '导航',
  status: '100%',
  install(app: App): void {
    app.component(Dropdown.name, Dropdown)
    app.component(DropdownItem.name, DropdownItem)
  }
}
