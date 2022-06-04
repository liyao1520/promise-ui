import { log } from 'console'
import { Ref } from 'vue'
import { TriggerType } from '../dropdown-types'
export default function (trigger: Ref<TriggerType>, visible: Ref<boolean>) {
  let isEnter = false
  let timer: number
  const onClick = () => {
    if (trigger.value === 'hover') return
    visible.value = !visible.value
  }

  const onMouseenter = () => {
    if (trigger.value === 'click') return
    isEnter = true
    visible.value = true
  }

  const onMouseleave = () => {
    if (trigger.value === 'click') return
    isEnter = false
    clearTimeout(timer)
    timer = window.setTimeout(() => {
      if (isEnter) return
      visible.value = false
    }, 300)
  }
  return { onClick, onMouseenter, onMouseleave }
}
