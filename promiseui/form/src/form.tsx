import { defineComponent } from 'vue'
import { formProps, FormProps } from './form-types'

import "./index.scss"

export default defineComponent({
  name: 'PForm',
  props: formProps,
  emits: [],
  setup(props: FormProps, ctx) {
    return () => {
      return (<div class="pui-form"></div>)
    }
  }
})
