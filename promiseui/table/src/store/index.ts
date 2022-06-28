import { computed, ref, Ref, shallowRef, watchEffect } from 'vue'
import {
  filterMethod,
  SortDirection,
  Sorter,
  TableColumn,
  TableProps,
  TableStore
} from '../table-types'

export function createStore<T>(
  dataSource: Ref<T[]>,
  columns: Ref<TableColumn[]>,
  props: TableProps
): TableStore<T> {
  // 内部使用的data
  const tableData: Ref<T[]> = ref([])
  // 外部传来的data
  // filterMethod
  const filterMethod = shallowRef<filterMethod>(() => true)
  watchEffect(() => {
    tableData.value = dataSource.value.slice() || []
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
  return {
    state: {
      tableData,
      _data: dataSource,
      _columns: columns,
      filterMethod,
      filterTableData
    },
    tableProps: props,
    sortData,
    filterData
  }
}
