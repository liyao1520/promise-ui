import { Ref } from 'vue'
import { TriggerType } from '../dropdown-types'
export default function (
  trigger: Ref<TriggerType>,
  origin: Ref,
  overlayEl: Ref,
  visible: Ref<boolean>
) {
  let timer: number

  const onClick = () => {
    if (trigger.value === 'click') {
      visible.value = !visible.value
    }
  }

  const handleLeave = () => {
    visible.value = false
  }

  const onMouseenter = (e: MouseEvent) => {
    if (trigger.value === 'hover') {
      clearTimeout(timer)
      visible.value = true
    }
  }

  const onMouseleave = (e: MouseEvent) => {
    if (trigger.value === 'hover') {
      clearTimeout(timer)
      timer = window.setTimeout(handleLeave, 300)
    }
  }
  return { onClick, onMouseenter, onMouseleave }
}
