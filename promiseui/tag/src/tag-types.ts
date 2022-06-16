import type { PropType, ExtractPropTypes } from 'vue'
import { ICommonColor, ICommonSize } from '../../types'

export const tagProps = {
  type: {
    type: String as PropType<ICommonColor | 'default'>,
    default: 'default'
  },
  closable: Boolean,
  bordered: Boolean,
  disabled: Boolean,
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  }
} as const

export type TagProps = ExtractPropTypes<typeof tagProps>
