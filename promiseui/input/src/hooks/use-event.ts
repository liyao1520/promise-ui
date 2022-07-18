import { Ref, SetupContext, watch } from 'vue'
import useFormItem from '../../../form/src/hooks/use-form-item'
import { InputProps } from '../input-types'

const useEvent = (
  props: InputProps,
  ctx: SetupContext,
  focused: Ref<boolean>
) => {
  const { triggerValidate } = useFormItem()
  const onInput = (e: Event) => {
    ctx.emit('input', e)
    ctx.emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
  const onFocus = (e: Event) => {
    ctx.emit('focus', e)
    focused.value = true
  }
  watch(
    () => props.modelValue,
    () => {
      triggerValidate('change')
    }
  )
  const onBlur = (e: Event) => {
    triggerValidate('blur')
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
