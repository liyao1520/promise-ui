import { computed, defineComponent, ref, StyleValue, Teleport, toRefs, Transition } from 'vue'
import { overlayProps, OverlayProps } from './overlay-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useOverlay from './hooks/use-overlay'

export default defineComponent({
  name: 'POverlay',
  props: overlayProps,
  emits: [],
  setup(props: OverlayProps, { slots }) {
    const { modelValue, position, showArrow } = toRefs(props)

    const ns = useNamespace('overlay')
    const overlayEl = ref<Element | null>(null)
    const { x, y } = useOverlay(overlayEl, props)
    const styles = computed<StyleValue>(() => ({
      top: y.value + 'px',
      left: x.value + 'px'
    }))
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(position.value)]: true
    }))
    return () => {
      return (
        <Teleport to={'body'}>
          <Transition>
            {modelValue.value && (
              <div style={styles.value} class={classes.value} ref={overlayEl}>
                {slots.default && slots.default()}
                {showArrow.value && <span class={ns.e('arrow')}></span>}
              </div>
            )}
          </Transition>
        </Teleport>
      )
    }
  }
})
