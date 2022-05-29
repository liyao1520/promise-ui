import { toRefs, ref } from 'vue'
import { ButtonProps } from '../button-types'

const useEvent = (props: ButtonProps, emit: (event: 'click', ...args: any[]) => void) => {
  const { loading } = toRefs(props)
  const isMouseDown = ref(false)
  const onClick = (e: MouseEvent) => {
    if (loading.value) return
    emit('click', e)
  }
  const onMousedown = () => {
    if (loading.value) return
    isMouseDown.value = true
  }
  const onMouseup = () => {
    if (loading.value) return
    isMouseDown.value = false
  }

  return {
    onClick,
    onMousedown,
    onMouseup,
    isMouseDown
  }
}

export default useEvent
