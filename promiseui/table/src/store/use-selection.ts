import { computed, Ref, watch } from 'vue'
import { RowSelection } from '../table-types'

export default function useSelection(
  rowSelection: Ref<RowSelection | undefined>,
  dataSource: Ref<any[]>,
  rowKey: string | ((item: any) => string | number)
) {
  const selectionSet = computed(() => new Set(rowSelection.value?.selectedRowKeys || []))

  const toggleSelection = (checked: boolean, rowKey: string | number) => {
    if (checked) {
      if (rowSelection.value?.onChange) {
        rowSelection.value?.onChange([...selectionSet.value, rowKey])
      }
    } else {
      if (rowSelection.value?.onChange) {
        const keys = [...selectionSet.value]
        const index = keys.indexOf(rowKey)
        if (index != -1) {
          keys.splice(index, 1)
        }
        rowSelection.value?.onChange(keys)
      }
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
      rowSelection.value.onChange([...cloneSet])
    }
  }
  const selectionClear = () => {
    if (rowSelection.value?.onChange) {
      rowSelection.value.onChange([])
    }
  }
  return {
    selectionSet,
    toggleSelection,
    selectionAll,
    selectionClear
  }
}
