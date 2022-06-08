import type { PropType, ExtractPropTypes, ComponentPublicInstance, CSSProperties } from 'vue'
export type Placement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'right-start'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'

export const overlayProps = {
  dark: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: false,
    required: false
  },
  origin: {
    type: [Object, null] as PropType<HTMLElement | ComponentPublicInstance | null>,
    default: null,
    required: false
  },
  position: {
    type: String as PropType<Placement>,
    default() {
      return 'bottom'
    },
    required: false
  },

  offset: {
    type: Number,
    default: 12,
    required: false
  },
  showArrow: {
    type: Boolean,
    default: false,
    required: false
  },
  style: {
    type: Object as PropType<CSSProperties>,
    default() {
      return {}
    }
  },
  class: {
    default: ''
  },
  flip: {
    type: Boolean,
    default: false
  }
} as const

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
