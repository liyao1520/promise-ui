import { ComponentPublicInstance, computed, ref, Ref, toRefs, watchEffect } from 'vue'
import { OverlayProps } from '../overlay-types'

const useOverlay = (overlayEl: Ref<Element | null>, props: OverlayProps) => {
  const x = ref(0)
  const y = ref(0)
  const shouldShow = ref(true)
  const { modelValue, origin, position, offset } = toRefs(props)
  const updatePosition = async () => {
    // 遮罩层modelValue 为false 则直接return
    if (!overlayEl.value) return
    //  origin 没传 ? 不可以显示
    if (!origin.value) {
      shouldShow.value = false
      return
    }
    // 如果传的是实例,需要得到真实的el
    let el: null | HTMLElement = null
    if ((origin.value as ComponentPublicInstance).$el) {
      el = (origin.value as ComponentPublicInstance).$el
    } else {
      el = origin.value as HTMLElement
    }

    const { top, left, bottom, right, width, height } = el!.getBoundingClientRect()
    // 原生不存在? 那就 隐藏

    if (width === 0 && height === 0) {
      shouldShow.value = false
    } else {
      shouldShow.value = true
    }

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

  watchEffect((onCleanup) => {
    onCleanup(() => window.removeEventListener('scroll', updatePosition))
    if (modelValue.value) {
      updatePosition()
      window.addEventListener('scroll', updatePosition)
    }
  })
  const isVisible = computed(() => modelValue.value && shouldShow.value)
  return {
    x,
    y,
    isVisible
  }
}

export default useOverlay
