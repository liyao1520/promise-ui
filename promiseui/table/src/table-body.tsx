import { computed, CSSProperties, defineComponent, PropType } from 'vue'
import { Checkbox } from '../../checkbox'
import { useNamespace } from '../../shared/hooks/use-namespace'
import styleStringOrNumber from '../../shared/utils/styleStringOrNumber'
import useTableStore from './hooks/use-table-store'
import { RowFn, TableColumn } from './table-types'

export default defineComponent({
  name: 'PTableBody',
  props: {
    rowProps: Function as PropType<RowFn<object>>
  },

  setup(props) {
    const ns = useNamespace('table')
    const { state, tableProps, toggleSelection } = useTableStore()

    const { _columns, filterTableData, selectionSet } = state
    let canLog = true
    const renderEmtpyWithError = (message: string) => {
      if (canLog) {
        canLog = false
        setTimeout(() => {
          console.warn(message)
          canLog = true
        })
      }
      return null
    }

    const renderHeaderTd = (row: Record<string | symbol, any>, col: TableColumn, index: number) => {
      return (
        <td class={ns.e('cell')} key={row[col.dataIndex]}>
          {typeof col.dataIndex === 'string'
            ? row[col.dataIndex]
            : renderEmtpyWithError(`[columns] dataIndex类型为:${typeof col.dataIndex} 应为 string`)}
        </td>
      )
    }
    const renderRowProps = (item: any, index: number) => {
      if (props.rowProps) {
        return props.rowProps(item, index)
      } else {
        return {}
      }
    }
    const tableBodyStyles = computed<CSSProperties>(() => ({
      maxHeight: styleStringOrNumber(tableProps.maxHeight),
      minHeight: styleStringOrNumber(tableProps.maxHeight)
    }))
    return () => {
      return (
        <tbody class={ns.e('body')}>
          {filterTableData.value.map((row, index) => {
            const rowkey = row.__key__
            return (
              <tr key={rowkey} class={ns.e('row')} {...renderRowProps(row, index)}>
                {/* render checkbox */}
                {tableProps.rowSelection && (
                  <th class={[ns.e('cell'), ns.e('selection')]}>
                    <Checkbox
                      modelValue={selectionSet.value.has(rowkey)}
                      onChange={(checked) => toggleSelection(checked, row)}
                    />
                  </th>
                )}
                {_columns.value.map((col) => renderHeaderTd(row, col, index))}
              </tr>
            )
          })}
        </tbody>
      )
    }
  }
})
