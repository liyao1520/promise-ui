import { computed, defineComponent, nextTick, PropType, ref } from 'vue'
import { Checkbox } from '../../checkbox'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useCellClass from './hooks/use-cell-class'
import useTableStore from './hooks/use-table-store'
import TableFilter from './table-filter'
import TableSorter from './table-sorter'

export default defineComponent({
  name: 'PTableHeader',

  setup(props) {
    const ns = useNamespace('table')
    const { state, tableProps, selectionAll, selectionClear } = useTableStore()
    const { _columns, isSelectionAll, selectionSet } = state
    const classes = computed(() => ({
      [ns.e('header')]: true
    }))
    const indeterminate = computed(() => !isSelectionAll.value && !!selectionSet.value.size)
    const rowRef = ref<HTMLElement>()
    nextTick(() => {
      console.log(rowRef.value)

      const tds = rowRef.value?.querySelectorAll('th')
      console.log(tds)
    })
    return () => (
      <thead class={classes.value}>
        <tr ref={rowRef}>
          {/* render checkbox */}
          {tableProps.rowSelection && (
            <th class={[ns.e('cell'), ns.e('selection')]}>
              <Checkbox
                indeterminate={indeterminate.value}
                onChange={(checked) =>
                  checked || indeterminate.value ? selectionAll() : selectionClear()
                }
                modelValue={isSelectionAll.value}
              />
            </th>
          )}
          {_columns.value.map((col, index) => {
            return (
              <th class={useCellClass(col)}>
                <div>
                  {col.title}
                  {typeof col.sorter === 'function' && <TableSorter sortMethod={col.sorter} />}
                  {typeof col.filter === 'function' && (
                    <TableFilter filterOptions={col.filterOptions} filterMethod={col.filter} />
                  )}
                </div>
              </th>
            )
          })}
        </tr>
      </thead>
    )
  }
})
