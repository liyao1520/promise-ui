import { ICommonSize } from './../../types'
import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'

export const checkboxProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  label: String,
  value: [Boolean, String, Number] as PropType<string | boolean | number>,
  disabled: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    //部分选择
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<ICommonSize>
  }
} as const
export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<(string | boolean | number)[]>,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  max: {
    type: Number,
    default: Infinity
  },
  min: {
    type: Number,
    default: -Infinity
  },
  size: {
    type: String as PropType<ICommonSize>
  }
} as const

interface ICheckBoxContext {
  props: CheckboxGroupProps
  removeValue: (value: string | boolean | number) => void
  addValue: (value: string | boolean | number) => void
}

export const checkBoxKey: InjectionKey<ICheckBoxContext> = Symbol('checkBoxKey')

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
