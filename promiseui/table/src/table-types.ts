import type { PropType, ExtractPropTypes, CSSProperties } from 'vue'
import { ICommonSize } from '../../types'
export type Align = 'left' | 'right' | 'center'
export type DataSource = Record<string | symbol, any>[]
export const tableProps = {
  height: {
    type: [String, Number] as PropType<string | number>
  },
  maxHeight: {
    type: [String, Number] as PropType<string | number>
  },
  dataSource: {
    type: Array as PropType<DataSource>,
    default() {
      return []
    }
  },
  columns: {
    type: Array as PropType<TableColumn[]>,
    default() {
      return []
    }
  },
  rowKey: [String, Function] as PropType<string | (() => string | number)>,
  stripe: Boolean,
  border: Boolean,
  size: {
    type: String as PropType<ICommonSize>,
    default: 'md'
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  rowClassName: Function as PropType<() => string>,
  rowStyle: Function as PropType<() => CSSProperties>,
  cellClassName: Function as PropType<() => string>,
  cellStyle: Function as PropType<() => CSSProperties>,
  headerRowClassName: Function as PropType<() => string>,
  headerRowStyle: Function as PropType<() => CSSProperties>
} as const

export type TableProps = ExtractPropTypes<typeof tableProps>

interface Column {
  dataIndex: string
  key: string // 不设置的化采用dataIndex
  title: string
  align: Align
  colSpan: number
  width: number
  maxWidth: number
  minWidth: number
  resizable: boolean
  fixed: 'left' | 'right'
}

export type TableColumn = Partial<Column> & {
  dataIndex: string
}
