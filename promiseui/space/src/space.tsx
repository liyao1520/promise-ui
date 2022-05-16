import { defineComponent } from 'vue'
import { spaceProps, SpaceProps } from './space-types'

import './index.scss'

export default defineComponent({
  name: 'PSpace',
  props: spaceProps,
  emits: [],
  setup(props: SpaceProps, { slots }) {
    return () => {
      return <div class="pui-space">{slots.default && slots.default()}</div>
    }
  }
})
