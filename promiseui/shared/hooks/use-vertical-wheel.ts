import { onMounted, onUnmounted, Ref } from 'vue'
interface Ioptions {
  step?: number
  smooth?: boolean
}
const useVerticalWheel = (
  target: Ref<HTMLElement | null | undefined>,
  options?: Ioptions
) => {
  const { step = 50, smooth = false } = options || {}
  function onWheelHandle(event: WheelEvent) {
    if (!target.value) return
    if (target.value.clientWidth >= target.value.scrollWidth) return
    const _this = target.value as HTMLElement
    //禁止事件默认行为（此处禁止鼠标滚轮行为关联到"屏幕滚动条上下移动"行为）
    event.preventDefault()
    //设置鼠标滚轮滚动时屏幕滚动条的移动步长
    if (event.deltaY < 0) {
      //向上滚动鼠标滚轮，屏幕滚动条左移
      _this.scrollTo({
        left: _this.scrollLeft - step,
        behavior: smooth ? 'smooth' : undefined
      })
    } else {
      //向下滚动鼠标滚轮，屏幕滚动条右移
      _this.scrollTo({
        left: _this.scrollLeft + step,
        behavior: smooth ? 'smooth' : undefined
      })
    }
  }

  onMounted(() => {
    if (!target.value) return
    target.value.addEventListener('wheel', onWheelHandle)
  })
  onUnmounted(() => {
    if (!target.value) return
    target.value.removeEventListener('wheel', onWheelHandle)
  })
}

export default useVerticalWheel
