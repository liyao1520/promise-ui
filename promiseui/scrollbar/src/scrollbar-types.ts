import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'

export const scrollbarProps = {
  height: String,
  width: String,
  maxHeight: String,
  wrapStyle: {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: ''
  },
  wrapClass: String,
  viewStyle: {
    type: [String, Object] as PropType<string | CSSProperties>,
    default: ''
  },
  viewClass: String,
  always: {
    type: Boolean,
    default: false
  },
  minSize: {
    type: Number,
    default: 20
  }
} as const

export type ScrollbarProps = ExtractPropTypes<typeof scrollbarProps>
