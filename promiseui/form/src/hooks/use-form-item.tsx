import { inject, ref } from 'vue'
import { formItemContextKey } from '../form-types'

export default function () {
  const FormItemContext = inject(formItemContextKey, undefined)
  const validate = FormItemContext?.validate
  const triggers = FormItemContext?.triggers || ref<string[]>([])
  const triggerValidate = (triggerName: string) => {
    if (triggers.value.includes(triggerName)) {
      validate?.()
    }
  }
  return { triggerValidate }
}
