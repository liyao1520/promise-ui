import { Ref, SetupContext } from 'vue'
import { InputProps } from '../input-types'

const useEvent = (props: InputProps, ctx: SetupContext, focused: Ref<boolean>) => {
  const onInput = (e: Event) => {
    ctx.emit('input', e)
    ctx.emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
  const onFocus = (e: Event) => {
    ctx.emit('focus', e)
    focused.value = true
  }

  const onBlur = (e: Event) => {
    ctx.emit('blur', e)
    focused.value = false
  }
  return {
    onInput,
    onFocus,
    onBlur
  }
}

export default useEvent
