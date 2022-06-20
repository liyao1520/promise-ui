import { log } from 'console'
import { Ref } from 'vue'
import { TriggerType } from '../dropdown-types'
export default function (trigger: Ref<TriggerType>, visible: Ref<boolean>) {
  let timer: number
  const onClick = () => {
    if (trigger.value === 'hover') return
    visible.value = !visible.value
  }

  const handleLeave = () => {
    visible.value = false
  }

  const onMouseenter = () => {
    if (trigger.value === 'click') return
    clearTimeout(timer)

    visible.value = true
  }

  const onMouseleave = () => {
    if (trigger.value === 'click') return

    clearTimeout(timer)
    timer = window.setTimeout(handleLeave, 300)
  }
  return { onClick, onMouseenter, onMouseleave }
}
