import { ICommonSize } from './../../types'
import type { PropType, ExtractPropTypes, CSSProperties } from 'vue'

export const formProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  inline: Boolean,
  labelWidth: {
    type: String as PropType<number | string | 'auto'>
  },
  labelPosition: {
    type: String as PropType<'left' | 'top'>
  },
  model: {
    type: Object,
    default() {
      return {}
    }
  },
  showLabel: Boolean,
  showRequireMark: Boolean,
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  },
  validateMessages: {}
  // rules: {

  // }
} as const

export const formItemProps = {
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String as PropType<number | string | 'auto'>
  },
  labelPosition: {
    type: String as PropType<'left' | 'top'>
  },
  labelStyle: {
    type: [String, Object] as PropType<CSSProperties | string>
  },
  showLabel: Boolean,
  showRequireMark: Boolean,
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  }
  // rule:{}
}

export type FormProps = ExtractPropTypes<typeof formProps>
