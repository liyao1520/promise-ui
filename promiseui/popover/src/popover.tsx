import { defineComponent } from 'vue'
import { popoverProps, PopoverProps } from './popover-types'

import "./index.scss"

export default defineComponent({
  name: 'PPopover',
  props: popoverProps,
  emits: [],
  setup(props: PopoverProps, ctx) {
    return () => {
      return (<div class="pui-popover"></div>)
    }
  }
})
