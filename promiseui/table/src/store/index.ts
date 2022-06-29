import { computed, nextTick, ref, Ref, shallowRef, toRef, watchEffect } from 'vue'
import {
  filterMethod,
  SortDirection,
  Sorter,
  TableColumn,
  TableProps,
  TableStore
} from '../table-types'
import useSelection from './use-selection'
export function createStore<T>(
  dataSource: Ref<any[]>,
  columns: Ref<TableColumn[]>,
  props: TableProps
): TableStore<T> {
  // 内部使用的data
  const tableData: Ref<T[]> = ref([])
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
  const filterTableData = computed(() => tableData.value.filter(filterMethod.value))

  //
  const { selectionClear, selectionAll, toggleSelection, selectionSet } = useSelection(
    toRef(props, 'rowSelection'),
    dataSource,
    props.rowKey,
    dataSourceMap
  )
  const isSelectionAll = computed(
    () => !!selectionSet.value.size && selectionSet.value.size === filterTableData.value.length
  )
  return {
    state: {
      tableData,
      _data: dataSource,
      _columns: columns,
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
    toggleSelection
  }
}
