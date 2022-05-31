import { defineComponent } from 'vue'
import { overlayProps, OverlayProps } from './overlay-types'

import "./index.scss"

export default defineComponent({
  name: 'POverlay',
  props: overlayProps,
  emits: [],
  setup(props: OverlayProps, ctx) {
    return () => {
      return (<div class="pui-overlay"></div>)
    }
  }
})
