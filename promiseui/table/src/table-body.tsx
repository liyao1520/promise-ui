import { defineComponent, PropType } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useTableStore from './hooks/use-table-store'
import { RowFn, TableColumn } from './table-types'

export default defineComponent({
  name: 'PTableBody',
  props: {
    rowProps: Function as PropType<RowFn<object>>
  },

  setup(props) {
    const ns = useNamespace('table')
    const { state } = useTableStore()
    const { tableData, _columns, filterMethod } = state
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
    const renderHeaderTd = (
      item: Record<string | symbol, any>,
      col: TableColumn,
      index: number
    ) => {
      return (
        <td class={ns.e('cell')}>
          {typeof col.dataIndex === 'string'
            ? item[col.dataIndex]
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
    return () => (
      <tbody>
        {tableData.value.filter(filterMethod.value).map((item, index) => (
          <tr class={ns.e('row')} {...renderRowProps(item, index)}>
            {_columns.value.map((col) => renderHeaderTd(item, col, index))}
          </tr>
        ))}
      </tbody>
    )
  }
})
