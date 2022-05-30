import { defineComponent, h, toRefs } from 'vue'
import { iconProps, IconProps } from './icon-types'
import { Icon } from '@vicons/utils'
import './index.scss'

export default defineComponent({
  name: 'PIcon',
  props: iconProps,
  emits: [],
  setup(props: IconProps, ctx) {
    const { component } = toRefs(props)

    return () => {
      return (
        <Icon {...props} class="pui-icon">
          {component?.value ? h(component.value) : ctx.slots.default?.()}
        </Icon>
      )
    }
  }
})
