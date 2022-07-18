import type { PropType, ExtractPropTypes, VNode, Component } from 'vue'

export const messageProps = {
  message: {
    type: [String, Object] as PropType<string | VNode>,
    required: true
  },
  type: {
    type: String as PropType<IMEssageType>,
    default: 'info',
    required: false
  },
  duration: {
    type: Number,
    default: 3000,
    required: false
  },
  offset: {
    type: Number,
    default: 60,
    required: false
  },
  showClose: {
    type: Boolean,
    default: false,
    required: false
  },
  customClass: {
    type: String,
    default: '',
    required: false
  }
} as const

export type MessageProps = ExtractPropTypes<typeof messageProps>
export type IMEssageType = 'success' | 'warning' | 'info' | 'error' | 'none'
export const messageTypes = [
  'success',
  'info',
  'warning',
  'error',
  'none'
] as const
export type IMessageConfig = Partial<MessageProps>
type IMessageStaticFn = (
  message: string,
  config?: Omit<Partial<MessageProps>, 'type' | 'message'>
) => Promise<undefined>
export interface MessageFn {
  (config: Partial<MessageProps>): Promise<undefined>
  success?: IMessageStaticFn
  info?: IMessageStaticFn
  warning?: IMessageStaticFn
  error?: IMessageStaticFn
  none?: IMessageStaticFn
}
export interface IMessage {
  (config: Partial<MessageProps>): Promise<undefined>
  success: IMessageStaticFn
  info: IMessageStaticFn
  warning: IMessageStaticFn
  error: IMessageStaticFn
  none: IMessageStaticFn
}
