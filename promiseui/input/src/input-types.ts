import type { PropType, ExtractPropTypes } from 'vue'

type InputType = 'lg' | 'md' | 'sm'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<InputType>,
    default: 'md'
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
