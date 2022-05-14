import { defineComponent } from 'vue'
import { buttonProps, ButtonProps } from './button-types'

import './index.scss'

export default defineComponent({
  name: 'PButton',
  props: buttonProps,
  emits: [],
  setup(props: ButtonProps, { slots }) {
    return () => {
      return <div class="pui-button">{slots.default && slots.default()}</div>
    }
  }
})
