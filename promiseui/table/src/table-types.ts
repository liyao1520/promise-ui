import type { PropType, ExtractPropTypes, CSSProperties, InjectionKey, Ref } from 'vue'
import { ICommonSize } from '../../types'
export type Align = 'left' | 'right' | 'center'
export type DataSource = Record<string | symbol, any>[]
export type RowFn<T> = (row: any, rowIndex: number) => T
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
  rowProps: Function as PropType<RowFn<object>>,
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
export type Sorter = (row1: any, row2: any) => number
export type Filter = (value: string | number, item: any, index: number, array: any[]) => boolean
export type FilterOption = { label: string; value: string | number }
interface Column {
  dataIndex: string
  key: string // 不设置的化采用dataIndex
  title: string
  align: Align
  width: number
  maxWidth: number
  minWidth: number
  resizable: boolean
  fixed: 'left' | 'right'
  rowSpan: RowFn<number>
  colSpan: RowFn<number>
  sorter: Sorter
  filter: Filter
  filterOptions: FilterOption[]
}

export type TableColumn = Partial<Column> & {
  dataIndex: string
}
export type SortMethod<T = any> = (a: T, b: T) => number
export type SortDirection = 'ASC' | 'DESC' | ''
export type filterMethod = (value: any, index: number, array: any[]) => boolean
export interface TableStore<T = any> {
  state: {
    //外部数据
    _data: Ref<T[]>
    // 列数据
    _columns: Ref<TableColumn[]>
    // 内部数据
    tableData: Ref<T[]>
    filterMethod: Ref<filterMethod>
  }
  sortData: (direction: SortDirection, sortMethod: Sorter) => void
  filterData: (filterMethod: (value: any, index: number, array: any[]) => boolean) => void
}

export const TableStoreKey: InjectionKey<TableStore> = Symbol('TableStore')
