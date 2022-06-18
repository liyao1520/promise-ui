import type { PropType, ExtractPropTypes } from 'vue'

import { ISelectOption } from '../../select'
import { ICommonFormStatus, ICommonSize } from '../../types'
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
    type: String as PropType<ICommonSize>,
    default: 'md'
  }
} as const

export type AutoCompleteProps = ExtractPropTypes<typeof autoCompleteProps>
