import { defineComponent, ref } from 'vue'
import { selectProps, SelectProps } from './select-types'

import './index.scss'
import { Overlay } from '../../overlay'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useClickOutside from '../../shared/hooks/use-click-outside'

export default defineComponent({
  name: 'PSelect',
  props: selectProps,
  emits: [],
  setup(props: SelectProps, ctx) {
    const selectEl = ref<HTMLDivElement | null>(null)
    const overlayShow = ref(true)
    const ns = useNamespace('select')
    const overlayEl = ref()
    const onOutsideClick = () => (overlayShow.value = false)
    return () => {
      return (
        <div class="pui-select">
          <div
            class={ns.e('input')}
            ref={selectEl}
            onClick={(_) => (overlayShow.value = !overlayShow.value)}
          ></div>
          <Overlay
            v-model={overlayShow.value}
            position="bottom-start"
            origin={selectEl.value}
            offset={2}
            style={{ width: selectEl.value?.clientWidth + 'px' || 'unset' }}
            ref={overlayEl}
            onOutsideClick={onOutsideClick}
          ></Overlay>
        </div>
      )
    }
  }
})
