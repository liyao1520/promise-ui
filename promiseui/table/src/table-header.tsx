import { computed, defineComponent } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useTableStore from './hooks/use-table-store'
import TableFilter from './table-filter'
import TableSorter from './table-sorter'

export default defineComponent({
  name: 'PTableHeader',
  setup(props) {
    const ns = useNamespace('table')
    const { state } = useTableStore()
    const { _columns } = state
    const classes = computed(() => ({
      [ns.e('header')]: true
    }))
    return () => (
      <thead class={classes.value}>
        <tr>
          {_columns.value.map((col, index) => (
            <th class={ns.e('cell')}>
              <div>
                {col.title}
                {typeof col.sorter === 'function' && <TableSorter sortMethod={col.sorter} />}
                {typeof col.filter === 'function' && (
                  <TableFilter filterOptions={col.filterOptions} filterMethod={col.filter} />
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
    )
  }
})
