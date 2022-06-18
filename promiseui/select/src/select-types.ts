import { RenderItemProps } from './../../virtualScroll/src/virtualScroll-types'
import type { PropType, ExtractPropTypes, CSSProperties, VNodeChild } from 'vue'
import { ICommonColor, ICommonFormStatus, ICommonSize } from '../../types'
export const selectActiveKey = Symbol.for('promiseui-select-active')
export interface ISelectOption {
  value?: string | number
  label?: string
  class?: string
  style?: string | CSSProperties
  tagType?: ICommonColor | 'default'
  disabled?: boolean
  [selectActiveKey]?: boolean
}
export type FieldNames = { value: string; label: string }

export const selectProps = {
  options: {
    type: Array as PropType<any[]>
  },
  renderLabel: {
    type: Function as PropType<(itemProps: RenderItemProps<ISelectOption>) => VNodeChild>
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
  filterMethod: {
    type: Function
  },
  maxTagCount: {
    type: Number,
    default: Infinity
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
  addible: Boolean,
  placeholder: {
    type: String,
    default: 'select'
  },
  status: {
    type: String as PropType<ICommonFormStatus>
  },
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  }
} as const

export interface ISelectItem {
  value: any
  label: string
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
