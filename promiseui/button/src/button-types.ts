import type { PropType, ExtractPropTypes } from 'vue'

type IButtonType = 'primary' | 'success' | 'info' | 'wraning' | 'danger'
type IButtonSize = 'lg' | 'md' | 'sm' | 'xs'
type IFillMode = 'outline' | 'none' | 'dashed'
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'default'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'md'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fillMode: {
    type: String as PropType<IFillMode>,
    default: ''
  },
  shake: {
    type: Boolean,
    default: true
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
