import { RenderItemProps } from './../../virtualScroll/src/virtualScroll-types'
import type { PropType, ExtractPropTypes, VNodeChild } from 'vue'
import { boolean } from 'yargs'

import { ISelectOption } from '../../select'
import { ICommonSize } from '../../types'
export interface IAutoCompleteOption {
  value: string | number
  label: string
}
export const autoCompleteProps = {
  options: {
    type: Array as PropType<ISelectOption[]>,
    default() {
      return []
    }
  },
  maxOptionCount: {
    type: Number,
    default: 10
  },
  modelValue: String,
  placeholder: String,
  size: {
    type: String as PropType<ICommonSize>
  },
  disabled: Boolean,
  renderLabel: {
    type: Function as PropType<(itemProps: RenderItemProps<IAutoCompleteOption>) => VNodeChild>
  }
} as const

export type AutoCompleteProps = ExtractPropTypes<typeof autoCompleteProps>
