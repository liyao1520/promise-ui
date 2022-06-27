import { defineComponent, PropType } from 'vue'
import Empty from '../../shared/components/empty'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { DataSource, TableColumn } from './table-types'

export default defineComponent({
  name: 'PTableBody',
  props: {
    dataSource: {
      type: Array as PropType<DataSource>,
      default: () => []
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    }
  },

  setup(props) {
    const ns = useNamespace('table')
    const renderEmtpyWithError = (message: string) => {
      console.warn(message)
      return null
    }
    const renderHeaderTd = (item: Record<string | symbol, any>, col: TableColumn) => {
      return (
        <td class={ns.e('cell')}>
          {typeof col.dataIndex === 'string'
            ? item[col.dataIndex]
            : renderEmtpyWithError(`[columns] dataIndex类型为:${typeof col.dataIndex} 应为 string`)}
        </td>
      )
    }
    return () => (
      <tbody>
        {props.dataSource.map((item) => (
          <tr class={ns.e('row')}>{props.columns.map((col) => renderHeaderTd(item, col))}</tr>
        ))}
      </tbody>
    )
  }
})
