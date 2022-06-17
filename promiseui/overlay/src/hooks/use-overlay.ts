import { useResizeObserver } from '@vueuse/core'
import { Placement } from './../overlay-types'
import { ComponentPublicInstance, computed, ref, Ref, toRef, toRefs, watchEffect } from 'vue'
import { OverlayProps } from '../overlay-types'

const useOverlay = (overlayEl: Ref<HTMLDivElement | null>, props: OverlayProps) => {
  const x = ref(0)
  const y = ref(0)
  const shouldShow = ref(true)
  const realPosition = ref(props.position)
  const { modelValue, origin, position, offset, flip } = toRefs(props)
  const updatePosition = async () => {
    // 遮罩层modelValue 为false 则直接return
    if (!overlayEl.value) return
    //  origin 没传 ? 不可以显示
    if (!origin.value) {
      shouldShow.value = false
      return
    }
    // 如果传的是实例,需要得到真实的el
    let el: any
    if ((origin.value as ComponentPublicInstance).$el) {
      el = (origin.value as ComponentPublicInstance).$el
    } else {
      el = origin.value as HTMLElement
    }
    while (el && !el.tagName) {
      el = el.nextSibling
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
    let pos = position.value

    // 判断是否能展示全,如果不能则向反方向展示,flip

    if (flip.value) {
      const windowHeight = document.documentElement.clientHeight
      const windowWidth = document.documentElement.clientWidth
      if (top < clientHeight) pos = pos.replace('top', 'bottom') as Placement
      if (windowHeight - bottom < clientHeight) pos = pos.replace('bottom', 'top') as Placement
      if (left < clientWidth) pos = pos.replace('left', 'right') as Placement
      if (windowWidth - right < clientWidth) pos = pos.replace('right', 'left') as Placement
    }

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
    realPosition.value = pos
  }

  watchEffect((onCleanup) => {
    onCleanup(() => {
      window.removeEventListener('scroll', updatePosition)
      window.removeEventListener('resize', updatePosition)
    })
    if (modelValue.value) {
      updatePosition()
      window.addEventListener('scroll', updatePosition)
      window.addEventListener('resize', updatePosition)
    }
  })

  useResizeObserver(toRef(props, 'origin'), () => {
    updatePosition()
  })
  const isVisible = computed(() => modelValue.value && shouldShow.value)
  return {
    x,
    y,
    isVisible,
    realPosition
  }
}

export default useOverlay
