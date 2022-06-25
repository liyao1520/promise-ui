import { computed, defineComponent, ref, StyleValue, Teleport, toRefs, Transition } from 'vue'
import { overlayProps, OverlayProps } from './overlay-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useOverlay from './hooks/use-overlay'

import { onClickOutside } from '@vueuse/core'

export default defineComponent({
  name: 'POverlay',
  props: overlayProps,
  emits: ['update:modelValue', 'open', 'close', 'outsideClick'],
  setup(props: OverlayProps, { slots, emit, expose }) {
    const { showArrow, class: className, style, origin } = toRefs(props)

    const ns = useNamespace('overlay')
    const overlayEl = ref<HTMLDivElement | null>(null)
    const { x, y, isVisible, realPosition } = useOverlay(overlayEl, props)

    onClickOutside(
      overlayEl,
      () => {
        emit('outsideClick')
      },
      { ignore: [origin, ...props.clickOutsideIgnore] }
    )

    const styles = computed<StyleValue>(() => ({
      top: y.value + 'px',
      left: x.value + 'px',
      ...style.value
    }))
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(realPosition.value)]: true,
      [className.value]: true,
      [ns.m('dark')]: props.dark
    }))
    const animationName = computed(
      () =>
        'pui-' +
        ['bottom', 'top', 'left', 'right'].find((item) => realPosition.value.includes(item))
    )

    expose({
      el: overlayEl
    })
    return () => {
      return (
        <Teleport to={'body'}>
          <Transition
            name={animationName.value}
            onBeforeEnter={(e) => emit('open')}
            onAfterLeave={(e) => emit('close')}
          >
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
