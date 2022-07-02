import type { PropType, ExtractPropTypes, CSSProperties } from 'vue'
import { ICommonSize } from '../../types'

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
    type: String as PropType<ICommonSize>
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  class: {},
  style: {
    type: [String, Object] as PropType<string | CSSProperties>
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
