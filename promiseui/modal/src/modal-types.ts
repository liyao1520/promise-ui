import type { PropType, ExtractPropTypes } from 'vue'

export const modalProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  blockScroll: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  displayDirective: {
    type: String as PropType<'if' | 'show'>,
    default: 'if'
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  to: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body'
  },
  zIndex: {
    type: Number,
    default: 999
  },
  draggable: Boolean,
  title: String,
  width: { type: [String, Number] as PropType<number | string>, default: '30%' },
  top: String,
  onAfterEnter: {
    type: Function as PropType<() => void>
  },
  onAfterLeave: {
    type: Function as PropType<() => void>
  },
  onMaskClick: { type: Function as PropType<() => void> },
  onCloseIconClick: Function
} as const

export type ModalProps = ExtractPropTypes<typeof modalProps>
