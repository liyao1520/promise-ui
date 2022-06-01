import type { PropType, ExtractPropTypes } from 'vue'

export const dropdownProps = {
  type: {
    type: String as PropType<'button' | 'a' | ''>,
    default: ''
  }
} as const

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>
