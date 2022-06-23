import { defineComponent } from 'vue'
import { loadingBarProps, LoadingBarProps } from './loadingBar-types'

import "./index.scss"

export default defineComponent({
  name: 'PLoadingBar',
  props: loadingBarProps,
  emits: [],
  setup(props: LoadingBarProps, ctx) {
    return () => {
      return (<div class="pui-loadingBar"></div>)
    }
  }
})
