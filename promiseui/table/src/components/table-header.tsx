import { computed, defineComponent, ref } from 'vue'
import { Checkbox } from '../../../checkbox'
import { useNamespace } from '../../../shared/hooks/use-namespace'
import useCellClass from '../hooks/use-cell-class'
import useTableStore from '../hooks/use-table-store'
import TableFilter from './table-filter'
import TableSorter from './table-sorter'
import getColKey from '../utils/getColKey'

export default defineComponent({
  name: 'PTableHeader',
  setup(props) {
    const ns = useNamespace('table')
    const { state, tableProps, selectionAll, selectionClear, getFixedInfo } = useTableStore()
    const { _columns, isSelectionAll, selectionSet } = state
    const classes = computed(() => ({
      [ns.e('header')]: true
    }))
    const indeterminate = computed(() => !isSelectionAll.value && !!selectionSet.value.size)
    const rowRef = ref<HTMLElement>()
    const renderSelection = () => {
      const fixedInfo = getFixedInfo('selection', 0)
      return (
        tableProps.rowSelection && (
          <th
            class={[
              ns.e('cell'),
              ns.e('selection'),
              tableProps.rowSelection.fixed && ns.em('cell', 'fixed-left'),
              fixedInfo.class,
              tableProps.headerRowClassName
            ]}
            style={[fixedInfo.styles, tableProps.headerRowStyle || {}]}
          >
            <Checkbox
              indeterminate={indeterminate.value}
              onChange={(checked) =>
                checked || indeterminate.value ? selectionAll() : selectionClear()
              }
              modelValue={isSelectionAll.value}
            />
          </th>
        )
      )
    }
    return () => (
      <thead class={classes.value}>
        <tr class={[ns.e('cell'), tableProps.headerRowClassName]} style={tableProps.headerRowStyle}>
          {/* render checkbox */}
          {renderSelection()}
          {_columns.value.map((col, index) => {
            const colKey = getColKey(col)
            const fixedInfo = getFixedInfo('cell', index)
            return (
              <th
                key={colKey}
                class={[useCellClass(col), fixedInfo.class]}
                style={fixedInfo.styles}
              >
                <div>
                  {typeof col.title === 'function' ? col.title() : col.title}
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
