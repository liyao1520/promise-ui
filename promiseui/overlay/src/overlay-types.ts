import type { PropType, ExtractPropTypes } from 'vue'
type Placement =
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
type AlignType = 'start' | 'end' | 'center'
export const overlayProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  origin: {
    type: [Object, null] as PropType<HTMLElement | null>,
    default: null
  },
  position: {
    type: Array as PropType<Placement[]>,
    default() {
      return ['bottom']
    }
  },
  align: {
    type: String as PropType<AlignType>,
    default: 'center'
  },
  offset: {
    type: Number,
    default: 8
  },
  showArrow: {
    type: Boolean,
    default: false
  }
} as const

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
