import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
import { number } from 'yargs'

export const virtualScrollProps = {
  itemHeight: {
    type: Number,
    required: true
  },
  wrapHeight: Number,
  listData: {
    type: Array,
    default: []
  },
  itemKey: {
    type: String
  },
  itemClass: {},
  itemStyle: {
    type: [String, Object] as PropType<string | CSSProperties>
  },
  onLoadMore: {
    type: Function
  },
  loadMoreOffset: {
    type: Number,
    default: 1
  }
} as const

export type VirtualScrollProps = ExtractPropTypes<typeof virtualScrollProps>
