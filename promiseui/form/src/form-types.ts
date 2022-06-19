import { ICommonSize } from './../../types'
import { PropType, ExtractPropTypes, CSSProperties, provide, InjectionKey, Ref } from 'vue'
import { Rules, Rule, Values } from 'async-validator'
export type triggerType = 'blur' | 'change'
export const formProps = {
  disabled: {
    type: Boolean,
    default: false
  },
  inline: Boolean,
  labelWidth: {
    type: String as PropType<number | string | 'auto'>,
    default: 'auto'
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
  showLabel: {
    type: Boolean,
    default: true
  },
  showRequireMark: {
    type: Boolean,
    default: true
  },
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  },
  validateMessages: {},
  rules: {
    type: Object as PropType<Rules>,
    default() {
      return {}
    }
  }
} as const

export const formItemProps = {
  name: {
    type: String
  },
  label: {
    type: String,
    default: ''
  },
  labelWidth: {
    type: String as PropType<number | string | 'auto'>
  },
  labelPosition: {
    type: String as PropType<'left' | 'top' | 'right' | 'center'>
  },
  labelStyle: {
    type: [String, Object] as PropType<CSSProperties | string>
  },
  showLabel: Boolean,
  showRequireMark: Boolean,
  size: {
    type: String as PropType<ICommonSize>
  },
  rules: {
    type: Object as PropType<Rule>,
    default() {
      return []
    }
  },
  trigger: {
    type: [String, Array] as PropType<triggerType | string[]>,
    default: 'blur'
  }
}
export interface IFormContext {
  props: FormProps
  maxChildLabelWidth: Ref<number | undefined>
  childLabelWidthRace: (width: number) => void
  model: object
  addValidateFn: (validateFn: () => Promise<Values>) => void
}
export interface IFormItemContext {
  validate: () => Promise<Values>
  triggers: Ref<string[]>
}
export const formContextKey: InjectionKey<IFormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<IFormItemContext> = Symbol('formItemContextKey')

export type FormProps = ExtractPropTypes<typeof formProps>
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
