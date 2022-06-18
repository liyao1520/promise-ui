import { defineComponent } from 'vue'
import { 自动填充Props, 自动填充Props } from './自动填充-types'

import "./index.scss"

export default defineComponent({
  name: 'P自动填充',
  props: 自动填充Props,
  emits: [],
  setup(props: 自动填充Props, ctx) {
    return () => {
      return (<div class="pui-自动填充"></div>)
    }
  }
})
