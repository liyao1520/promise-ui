import { defineComponent } from 'vue'
import { tagProps, TagProps } from './tag-types'

import "./index.scss"

export default defineComponent({
  name: 'PTag',
  props: tagProps,
  emits: [],
  setup(props: TagProps, ctx) {
    return () => {
      return (<div class="pui-tag"></div>)
    }
  }
})
