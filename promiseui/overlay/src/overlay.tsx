import {
  computed,
  CSSProperties,
  nextTick,
  defineComponent,
  onMounted,
  ref,
  StyleValue,
  Teleport,
  toRefs,
  Transition,
  watch,
  watchEffect,
  ComponentPublicInstance
} from 'vue'
import { overlayProps, OverlayProps } from './overlay-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'

export default defineComponent({
  name: 'POverlay',
  props: overlayProps,
  emits: [],
  setup(props: OverlayProps, { slots }) {
    const { modelValue, origin, position, offset, showArrow } = toRefs(props)
    const x = ref(0)
    const y = ref(0)
    const ns = useNamespace('overlay')
    const overlayEl = ref<Element | null>(null)
    const updatePosition = async () => {
      // 遮罩层modelValue 为false 则直接return
      if (!overlayEl.value) return
      //  origin 没传 ? 直接return
      if (!origin.value) return
      // 如果传的是实例,需要得到真实的el
      let el: null | HTMLElement = null
      if ((origin.value as ComponentPublicInstance).$el) {
        el = (origin.value as ComponentPublicInstance).$el
      } else {
        el = origin.value as HTMLElement
      }
      const { top, left, bottom, right, width, height } = el!.getBoundingClientRect()
      const clientWidth = overlayEl.value!.clientWidth
      const clientHeight = overlayEl.value!.clientHeight
      // 让 overlay 默认到中央
      const w = (width - clientWidth) / 2
      const h = (height - clientHeight) / 2
      x.value = left + w
      y.value = top + h
      const pos = position.value

      const leftAndRightHandle = () => {
        if (pos.includes('start')) x.value -= w
        if (pos.includes('end')) x.value += w
      }
      const topAndBottomHandle = () => {
        if (pos.includes('start')) y.value -= h
        if (pos.includes('end')) y.value += h
      }
      if (pos.includes('left')) {
        x.value = left - clientWidth - offset.value
        topAndBottomHandle()
      } else if (pos.includes('top')) {
        y.value = top - clientHeight - offset.value
        leftAndRightHandle()
      } else if (pos.includes('right')) {
        x.value = right + offset.value
        topAndBottomHandle()
      } else if (pos.includes('bottom')) {
        y.value = bottom + offset.value
        leftAndRightHandle()
      }
    }
    watch(
      modelValue,
      (newValue) => {
        if (!newValue) return
        updatePosition()
        window.addEventListener('scroll', updatePosition)
      },
      { immediate: true }
    )
    watchEffect((onCleanup) => {
      onCleanup(() => window.removeEventListener('scroll', updatePosition))
      if (modelValue.value) {
        updatePosition()
        window.addEventListener('scroll', updatePosition)
      }
    })

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
