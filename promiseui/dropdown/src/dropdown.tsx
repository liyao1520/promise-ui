import { defineComponent } from 'vue'
import { dropdownProps, DropdownProps } from './dropdown-types'

import './index.scss'

export default defineComponent({
  name: 'PDropdown',
  props: dropdownProps,
  emits: [],
  setup(props: DropdownProps, ctx) {
    return () => {
      return <div class="pui-dropdown"></div>
    }
  }
})
