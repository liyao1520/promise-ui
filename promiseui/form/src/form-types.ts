import { ICommonSize } from './../../types'
import { PropType, ExtractPropTypes, CSSProperties, provide, InjectionKey } from 'vue'

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
export interface IFormContext {
  props: FormProps
}
export const formContextKey: InjectionKey<IFormContext> = Symbol('formContextKey')

export type FormProps = ExtractPropTypes<typeof formProps>
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
