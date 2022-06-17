import type { PropType, ExtractPropTypes, CSSProperties } from 'vue'
import { ICommonColor } from '../../types'
export const selectActiveKey = Symbol.for('promiseui-select-active')
export interface ISelectOption {
  value?: string | number
  label?: string
  class?: string
  style?: string | CSSProperties
  disabled?: boolean
  [selectActiveKey]?: boolean
}
export type FieldNames = { value: string; label: string }

export const selectProps = {
  options: {
    type: Array as PropType<any[]>
  },
  renderItem: {
    type: Function
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Number, Array] as PropType<string | number | string[] | number[]>
  },
  clearable: {
    type: Boolean,
    default: false
  },
  filterOption: {
    type: Function as PropType<(inputValue: string, option: unknown) => boolean>
  },
  filterable: {
    type: Boolean,
    default: false
  },
  maxOptionCount: {
    type: Number,
    default: 10
  },
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: Infinity
  },
  tagType: {
    type: String as PropType<ICommonColor | 'default'>,
    default: 'default'
  },
  addible: Boolean
} as const

export interface ISelectItem {
  value: any
  label: string
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
