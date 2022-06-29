import { computed, Ref } from 'vue'
import { RowSelection } from '../table-types'

export default function useSelection(
  rowSelection: Ref<RowSelection | undefined>,
  dataSource: Ref<any[]>,
  rowKey: string | ((item: any) => string | number),
  dataSourceMap: Map<string | number, object>
) {
  const selectionSet = computed(() => new Set(rowSelection.value?.selectedRowKeys || []))
  const getRows = (keys: (string | number)[]) => keys.map((key) => dataSourceMap.get(key))
  const handleChange = (keys: (string | number)[]) => {
    if (!rowSelection.value?.onChange) return
    if (rowSelection.value.onChange.length < 2) {
      rowSelection.value.onChange(keys, [])
    } else {
      rowSelection.value.onChange(keys, getRows(keys))
    }
  }
  const toggleSelection = (checked: boolean, row: any) => {
    const rowKey = row.__key__
    if (!rowSelection.value?.onChange) return
    if (checked) {
      const keys = [...selectionSet.value, rowKey]
      handleChange(keys)
    } else {
      const keys = [...selectionSet.value]
      const index = keys.indexOf(rowKey)
      if (index != -1) {
        keys.splice(index, 1)
      }
      handleChange(keys)
    }
  }

  const selectionAll = () => {
    const cloneSet = new Set(selectionSet.value)
    let isFunction = false
    let isString = false
    let key
    if (typeof rowKey === 'string') isString = true
    if (typeof rowKey === 'function') isFunction = true
    for (let i = 0; i < dataSource.value.length; i++) {
      const item = dataSource.value[i]
      if (isString) {
        key = item[rowKey as string]
      } else if (isFunction) {
        key = item[(rowKey as (item: any) => string | number)(dataSource.value[i])]
      } else {
        key = i
      }
      cloneSet.add(key)
    }
    if (rowSelection.value?.onChange) {
      const keys = [...cloneSet]
      handleChange(keys)
    }
  }
  const selectionClear = () => {
    if (rowSelection.value?.onChange) {
      handleChange([])
    }
  }
  return {
    selectionSet,
    toggleSelection,
    selectionAll,
    selectionClear
  }
}
