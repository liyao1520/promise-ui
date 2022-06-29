import { computed, defineComponent, PropType } from 'vue'
import { Checkbox } from '../../checkbox'
import { useNamespace } from '../../shared/hooks/use-namespace'
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
    return () => (
      <thead class={classes.value}>
        <tr>
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
              <th class={ns.e('cell')}>
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
