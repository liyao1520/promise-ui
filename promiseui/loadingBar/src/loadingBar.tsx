import { defineComponent, Teleport, Transition } from 'vue'
import { loadingBarProps, LoadingBarProps } from './loadingBar-types'

import './index.scss' //特殊组件
import { useNamespace } from '../../shared/hooks/use-namespace'

export default defineComponent({
  name: 'PLoadingBar',
  props: loadingBarProps,
  emits: [],
  setup(props: LoadingBarProps, { expose }) {
    const ns = useNamespace('loading-bar')

    return () => {
      return (
        <Teleport to="body">
          <Transition name={ns.b()} appear>
            <div class={ns.e('container')} v-show={props.show}>
              <div class={[ns.b(), props.isError && ns.m('error')]}></div>
            </div>
          </Transition>
        </Teleport>
      )
    }
  }
})
