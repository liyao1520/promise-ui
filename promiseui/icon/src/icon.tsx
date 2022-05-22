import { defineComponent } from 'vue'
import { iconProps, IconProps } from './icon-types'

import './index.scss'

export default defineComponent({
  name: 'PIcon',
  props: iconProps,
  emits: [],
  setup(props: IconProps, ctx) {
    return () => {
      return (
        <i {...props} class="pui-icon">
          {ctx.slots.default?.()}
        </i>
      )
    }
  }
})
