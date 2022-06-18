import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import { ICommonSize } from '../../types'

export type ValueType = string | number | boolean

export const radioProps = {
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: String,
  name: String,
  value: {
    type: [String, Number, Boolean] as PropType<ValueType>,
    default: 'on'
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<ValueType>,
    default: 'on'
  },
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  }
} as const

export const radioButtonProps = {
  checked: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: String,
  name: String,
  value: {
    type: [String, Number, Boolean] as PropType<ValueType>,
    default: 'on'
  },
  modelValue: {
    type: [String, Number, Boolean] as PropType<ValueType>,
    default: 'on'
  },
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  }
} as const

export const radioGroupProps = {
  name: String,
  modelValue: {
    type: [String, Number, Boolean] as PropType<ValueType>,
    default: 'on'
  },
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  }
} as const

interface IRadioContext {
  props: RadioGroupProps
  updateValue: (value: ValueType) => void
}

export const RadioKey: InjectionKey<IRadioContext> = Symbol('RadioKey')

export type RadioProps = ExtractPropTypes<typeof radioProps>

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
