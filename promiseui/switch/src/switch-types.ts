import type { PropType, ExtractPropTypes } from 'vue'
import { ICommonColor, ICommonSize } from '../../types'

const Value = [Boolean, String, Number] as PropType<boolean | string | number>

export const switchProps = {
  modelValue: {
    type: Value
  },
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: { type: Boolean, default: false },
  width: {
    type: [Number, String] as PropType<string | number>
  },
  activeText: {
    type: String,
    default: ''
  },
  inactiveText: {
    type: String,
    default: ''
  },
  activeValue: {
    type: Value,
    default: true
  },
  inactiveValue: {
    type: Value,
    default: false
  },
  activeColor: {
    type: String as PropType<ICommonColor | string>
  },
  inactiveColor: {
    type: String as PropType<ICommonColor | string>
  }
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
