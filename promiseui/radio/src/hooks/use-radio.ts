import { computed, inject, SetupContext } from 'vue'

import { RadioButtonProps, RadioKey, RadioProps } from '../radio-types'
export default function (props: RadioProps | RadioButtonProps, { emit }: SetupContext) {
  const RadioContext = inject(RadioKey, undefined)

  const checked = computed(() => {
    const value = RadioContext?.props.modelValue || props.modelValue
    return value === props.value
  })

  const inputName = computed(() => {
    const name = props.name || RadioContext?.props.name
    return name
  })

  const handleChange = () => {
    if (RadioContext) {
      RadioContext.updateValue(props.value)
    } else {
      emit('update:modelValue', props.value)
    }
  }

  const size = computed(() => RadioContext?.props.size || props.size)

  return {
    checked,
    inputName,
    handleChange,
    size
  }
}
