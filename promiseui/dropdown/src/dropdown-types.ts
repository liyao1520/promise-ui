import { Placement } from '../../overlay'
import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import { IButtonType } from '../../button/src/button-types'
import { ICommonSize } from '../../types'
export type TriggerType = 'hover' | 'click'
export const dropdownProps = {
  type: {
    type: String as PropType<'button' | 'a' | 'contextmenu' | ''>,
    default: ''
  },
  position: {
    type: String as PropType<Placement>,
    default: 'bottom'
  },
  dark: {
    type: Boolean,
    default: false
  },
  trigger: {
    type: String as PropType<TriggerType>,
    default: 'hover'
  },
  hideOnClick: {
    type: Boolean,
    default: true
  },
  // btn size
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  },
  offset: {
    type: Number,
    default: 3
  },
  showArrow: {
    type: Boolean,
    default: false,
    required: false
  },
  btnType: {
    type: String as PropType<IButtonType>,
    default: 'primary'
  }
} as const

export const dropdownItemProps = {
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
export interface IDropDownContext {
  handleClick: () => void
  props: DropdownProps
}

export const DropDownKey: InjectionKey<IDropDownContext> = Symbol('dropdown')

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>
export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>
