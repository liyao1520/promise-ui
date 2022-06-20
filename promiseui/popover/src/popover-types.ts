import type { PropType, ExtractPropTypes, CSSProperties } from 'vue'
import { Placement } from '../../overlay'

export const popoverProps = {
  content: String,
  trigger: {
    type: String as PropType<'click' | 'hover'>,
    default: 'hover'
  },
  position: {
    type: String as PropType<Placement>,
    default: 'top'
  },
  offset: {
    type: Number,
    default: 8,
    required: false
  },
  showArrow: {
    type: Boolean,
    default: true,
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
  }
} as const

export type PopoverProps = ExtractPropTypes<typeof popoverProps>
