import { Placement } from '../../overlay'
import type { PropType, ExtractPropTypes, InjectionKey, Ref } from 'vue'
import { IButtonType } from '../../button/src/button-types'
export type TriggerType = 'hover' | 'click' | 'contextmenu'
export const dropdownProps = {
  type: {
    type: String as PropType<'button' | 'a' | ''>,
    default: ''
  },
  position: {
    type: String as PropType<Placement>,
    default: 'bottom'
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
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  },
  offset: {
    type: Number,
    default: 8
  },
  showArrow: {
    type: Boolean,
    default: true,
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
  }
}
export interface DropDownInstacne {
  handleClick: () => void
  props: DropdownProps
}

export const DropDownKey: InjectionKey<DropDownInstacne> = Symbol('dropdown')

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>
export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>
