import { computed, inject } from 'vue'
import { formContextKey } from '../form-types'

export default function () {
  const FormContext = inject(formContextKey, undefined)

  const formSize = computed(() => FormContext?.props.size)
  return formSize
}
