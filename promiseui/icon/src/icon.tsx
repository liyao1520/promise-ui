import { defineComponent } from 'vue'
import { iconProps, IconProps } from './icon-types'
import { Icon } from '@vicons/utils'
import './index.scss'

export default defineComponent({
  name: 'PIcon',
  props: iconProps,
  emits: [],
  setup(props: IconProps, ctx) {
    return () => {
      return (
        <Icon {...props} class="pui-icon">
          {ctx.slots.default?.()}
        </Icon>
      )
    }
  }
})
