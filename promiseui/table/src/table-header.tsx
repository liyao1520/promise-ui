import { computed, defineComponent, PropType } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useTableStore from './hooks/use-table-store'
import TableSorter from './table-sorter'
import { TableColumn } from './table-types'

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
              {col.title}
              {typeof col.sorter === 'function' && <TableSorter sortMethod={col.sorter} />}
            </th>
          ))}
        </tr>
      </thead>
    )
  }
})
