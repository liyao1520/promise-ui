import {
  computed,
  defineComponent,
  ref,
  StyleValue,
  Teleport,
  toRefs,
  Transition,
  watchEffect
} from 'vue'
import { overlayProps, OverlayProps } from './overlay-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useOverlay from './hooks/use-overlay'

export default defineComponent({
  name: 'POverlay',
  props: overlayProps,
  emits: ['update:modelValue', 'open', 'close'],
  setup(props: OverlayProps, { slots, emit }) {
    const { modelValue, position, showArrow, origin } = toRefs(props)

    const ns = useNamespace('overlay')
    const overlayEl = ref<Element | null>(null)
    const { x, y, isVisible } = useOverlay(overlayEl, props)
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
          <Transition onBeforeEnter={(e) => emit('open')} onAfterLeave={(e) => emit('close')}>
            {isVisible() && (
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
