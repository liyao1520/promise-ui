import type { CSSProperties, ExtractPropTypes, PropType } from 'vue'
export type RenderItemProps<T> = {
  row: T
  rows: T[]
  index: number
}

export const virtualScrollProps = {
  itemHeight: {
    type: Number,
    required: true
  },
  wrapHeight: Number,
  listData: {
    type: Array as PropType<any[]>,
    default: []
  },
  itemKey: {
    type: String
  },
  itemClass: {
    type: [Object, Array, String, Function] as PropType<
      any | ((props: RenderItemProps<unknown>) => any)
    >
  },
  itemStyle: {
    type: [String, Object, Function] as PropType<
      string | CSSProperties | ((props: RenderItemProps<unknown>) => string | CSSProperties)
    >
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
