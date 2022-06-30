import {
  PropType,
  ExtractPropTypes,
  CSSProperties,
  InjectionKey,
  Ref,
  ComputedRef,
  VNodeChild
} from 'vue'
import { ICommonSize } from '../../types'
export type Align = 'left' | 'right' | 'center'
export type DataSource = Record<string | symbol, any>[]
export type RowFn<T, R> = (row: T, rowIndex: number) => R
export const tableProps = {
  tableLayout: String as PropType<'auto' | 'fixed'>,
  height: {
    type: [String, Number] as PropType<string | number>
  },
  maxHeight: [String, Number] as PropType<string | number>,
  minHeight: [String, Number] as PropType<string | number>,
  scrollX: [String, Number] as PropType<string | number>,
  dataSource: {
    type: Array as PropType<DataSource>,
    default() {
      return []
    }
  },
  columns: {
    type: Array as PropType<TableColumn<any>[]>,
    default() {
      return []
    }
  },
  rowProps: Function as PropType<(row: any, rowIndex: number) => object>,
  rowKey: {
    type: [String, Function] as PropType<string | ((item: any) => string | number)>,
    default: 'key'
  },
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
  headerRowStyle: Function as PropType<() => CSSProperties>,
  rowSelection: {
    type: Object as PropType<RowSelection>
  }
} as const
export type RowSelection = {
  selectedRowKeys: (string | number)[]
  fixed?: boolean // 是否固定在左边
  onChange?: (keys: (string | number)[], rows: any[]) => void
  style?: string | CSSProperties
}
export type TableProps = ExtractPropTypes<typeof tableProps>
export type Sorter = (row1: any, row2: any) => number
export type Filter = (value: string | number, item: any, index: number, array: any[]) => boolean
export type FilterOption = { label: string; value: string | number }
export type ColumnType = 'selection' | string

interface Column<T> {
  dataIndex: string | string[]
  key: string // 不设置的化采用dataIndex
  title: string | (() => VNodeChild)
  align: Align
  width: number | string
  maxWidth: number | string
  minWidth: number | string
  resizable: boolean
  fixed: 'left' | 'right'
  rowSpan: RowFn<T, number>
  colSpan: RowFn<T, number>
  sorter: Sorter
  filter: Filter
  filterOptions: FilterOption[]
  render: (rowData: T, rowIndex: number) => VNodeChild
}

export type TableColumn<T = object> = Partial<Column<T>>
export type ScrollXPosition = 'left' | 'right' | ''
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
    filterTableData: Ref<T[]>
    selectionSet: ComputedRef<Set<string | number>>
    isSelectionAll: Ref<boolean>
    dataSourceMap: Map<string | number, object>
  }
  tableProps: TableProps
  sortData: (direction: SortDirection, sortMethod: Sorter) => void
  filterData: (filterMethod: (value: any, index: number, array: any[]) => boolean) => void
  selectionClear: () => void
  selectionAll: () => void
  toggleSelection: (checked: boolean, row: any) => void
  setFixedStyle: (_offsetlefts: number[]) => void
  getFixedInfo: (
    type: 'cell' | 'selection',
    index: number
  ) => {
    styles: {
      left?: string
      right?: string
    }
    class: string | undefined
  }
  setScrollXPosition: (pos: ScrollXPosition) => void
}

export const TableStoreKey: InjectionKey<TableStore> = Symbol('TableStore')
