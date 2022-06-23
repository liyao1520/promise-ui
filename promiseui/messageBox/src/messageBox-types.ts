import { ICommonSize } from './../../types'
import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import { IButtonType } from '../../button'

export const messageBoxProps = {
  title: String,
  content: String,
  cancelButtonText: String,
  confirmButtonText: String,
  confirmButtonType: {
    type: String as PropType<IButtonType>,
    default: 'primary'
  },
  showClose: {
    type: Boolean,
    default: true
  },
  blockScroll: Boolean,
  buttonSize: {
    type: String as PropType<ICommonSize>,
    default: 'sm'
  },
  customClass: String,
  customStyle: [String, Object] as PropType<string | CSSProperties>,
  beforeClose: Function as PropType<(type: 'close' | 'confirm' | 'cancel') => Promise<boolean>>
} as const

export type MessageBoxProps = ExtractPropTypes<typeof messageBoxProps>
