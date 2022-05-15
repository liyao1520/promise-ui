import type { PropType, ExtractPropTypes } from 'vue'

type IButtonType = 'primary' | 'success' | 'info' | 'wraning' | 'danger'
type IButtonSize = 'lg' | 'md' | 'sm' | 'xs'
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'md'
  },
  icon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
