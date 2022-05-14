import { defineComponent } from 'vue'
import { buttonProps, ButtonProps } from './button-types'

import "./index.scss"

export default defineComponent({
  name: 'PButton',
  props: buttonProps,
  emits: [],
  setup(props: ButtonProps, ctx) {
    return () => {
      return (<div class="p-button"></div>)
    }
  }
})
