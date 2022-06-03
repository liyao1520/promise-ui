import { computed, defineComponent, ref, StyleValue, Teleport, toRefs, Transition } from 'vue'
import { overlayProps, OverlayProps } from './overlay-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useOverlay from './hooks/use-overlay'

export default defineComponent({
  name: 'POverlay',
  props: overlayProps,
  emits: ['update:modelValue', 'open', 'close'],
  setup(props: OverlayProps, { slots, emit, expose }) {
    const { position, showArrow, class: className, style } = toRefs(props)

    const ns = useNamespace('overlay')
    const overlayEl = ref<Element | null>(null)
    const { x, y, isVisible } = useOverlay(overlayEl, props)
    const styles = computed<StyleValue>(() => ({
      top: y.value + 'px',
      left: x.value + 'px',
      ...style.value
    }))
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(position.value)]: true,
      [className.value]: true
    }))

    expose({
      el: overlayEl
    })
    return () => {
      return (
        <Teleport to={'body'}>
          <Transition onBeforeEnter={(e) => emit('open')} onAfterLeave={(e) => emit('close')}>
            {isVisible.value && (
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
