import { ScrollXPosition } from './../table-types'
import { computed, ref, Ref, shallowRef, Slots, toRef, watchEffect } from 'vue'
import useStickyOffset from '../hooks/use-sticky-offset'
import {
  filterMethod,
  SortDirection,
  Sorter,
  TableColumnType,
  TableProps,
  TableStore
} from '../table-types'
import useSelection from '../hooks/use-selection'
import { useNamespace } from '../../../shared/hooks/use-namespace'
import { __TABLE_COLUMN } from '../table-column'
import useColumns from '../hooks/use-columns'
export function createStore<T>(
  dataSource: Ref<any[]>,
  columns: Ref<TableColumnType[]>,
  props: TableProps,
  tableRef: Ref<HTMLElement | undefined>,
  slots: Slots
): TableStore<T> {
  // 内部使用的data
  const tableData: Ref<T[]> = ref([])
  // 列数据,如果没传props.columns 则找template
  const _columns = useColumns(columns, slots)
  // 外部传来的data
  // filterMethod
  const filterMethod = shallowRef<filterMethod>(() => true)
  const getKey = (item: any, index: number) => {
    let key
    if (typeof props.rowKey === 'function') {
      key = props.rowKey(item)
    } else if (typeof props.rowKey === 'string') {
      key = item[props.rowKey]
    } else {
      key = index
    }
    return key
  }
  const dataSourceMap = new Map()
  const setDataSourceMap = () => {
    dataSourceMap.clear()
    for (let i = 0; i < dataSource.value.length; i++) {
      const row = dataSource.value[i]
      const key = getKey(row, i)
      dataSourceMap.set(key, row)
      row.__key__ = key
    }
  }

  watchEffect(() => {
    tableData.value = dataSource.value.slice() || []
    setDataSourceMap()
  })
  const sortData = (direction: SortDirection, sortMethod: Sorter) => {
    if (direction === 'ASC') {
      tableData.value.sort((a, b) => (sortMethod ? sortMethod(a, b) : 0))
    } else if (direction === 'DESC') {
      // 这里可以用reverse 来提高性能
      tableData.value.sort((a, b) => {
        return sortMethod ? -sortMethod(a, b) : 0
      })
    } else {
      tableData.value = dataSource.value.slice()
    }
  }
  const filterData = (_filterMethod: filterMethod) => {
    filterMethod.value = _filterMethod
  }
  const filterTableData = computed(() =>
    tableData.value.filter(filterMethod.value)
  )

  //
  const rowSelectionRef = toRef(props, 'rowSelection')
  const { selectionClear, selectionAll, toggleSelection, selectionSet } =
    useSelection(rowSelectionRef, dataSource, props.rowKey, dataSourceMap)
  const isSelectionAll = computed(
    () =>
      !!selectionSet.value.size &&
      selectionSet.value.size === filterTableData.value.length
  )

  const { setFixedStyle, getFixedInfo } = useStickyOffset(
    _columns,
    rowSelectionRef
  )
  let prevPos = 'left'
  const ns = useNamespace('table')
  const setScrollXPosition = (pos: ScrollXPosition) => {
    if (prevPos === pos) return
    tableRef.value?.classList.add(ns.m(`is${pos}`))
    tableRef.value?.classList.remove(ns.m(`is${prevPos}`))
    prevPos = pos
  }

  return {
    state: {
      tableData,
      _data: dataSource,
      _columns,
      filterMethod,
      filterTableData,
      selectionSet,
      isSelectionAll,
      dataSourceMap
    },
    tableProps: props,
    sortData,
    filterData,
    selectionClear,
    selectionAll,
    toggleSelection,
    setFixedStyle,
    getFixedInfo,
    setScrollXPosition
  }
}
