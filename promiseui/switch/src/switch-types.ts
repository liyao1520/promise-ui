import type { PropType, ExtractPropTypes } from 'vue'
import { ICommonColor, ICommonSize } from '../../types'

const Value = [Boolean, String, Number] as PropType<boolean | string | number>

export const switchProps = {
  modelValue: {
    type: Value,
    default: false
  },
  size: {
    type: String as PropType<ICommonSize>
  },
  disabled: {
    type: Boolean,
    default: false
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
    type: String as PropType<ICommonColor | string>,
    default: 'primary'
  },
  onBeforeChange: {
    type: Function
  }
} as const

export type SwitchProps = ExtractPropTypes<typeof switchProps>
