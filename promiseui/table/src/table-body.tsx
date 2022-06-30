import { defineComponent, PropType } from 'vue'
import { Checkbox } from '../../checkbox'
import { useNamespace } from '../../shared/hooks/use-namespace'
import getValueByPathArray from '../../shared/utils/getValueByPathArray'

import useCellClass from './hooks/use-cell-class'

import useTableStore from './hooks/use-table-store'
import { RowFn, TableColumn } from './table-types'
import getColKey from './utils/getColKey'
import getRowKey from './utils/getRowKey'

export default defineComponent({
  name: 'PTableBody',
  props: {
    rowProps: Function as PropType<RowFn<object>>
  },

  setup(props) {
    const ns = useNamespace('table')
    const { state, tableProps, toggleSelection, getFixedInfo } = useTableStore()

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
      const fixedInfo = getFixedInfo('cell', index)
      return (
        <td
          class={[useCellClass(col), fixedInfo.class]}
          key={getColKey(col)}
          style={fixedInfo.styles}
        >
          {typeof col.dataIndex === 'string'
            ? row[col.dataIndex]
            : Array.isArray(col.dataIndex)
            ? getValueByPathArray(col.dataIndex, row)
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
    const renderSelection = (rowkey: any, row: any) => {
      const fixedInfo = getFixedInfo('selection', 0)
      return (
        tableProps.rowSelection && (
          <td
            class={[
              ns.e('cell'),
              ns.e('selection'),
              tableProps.rowSelection.fixed && ns.em('cell', 'fixed-left'),
              fixedInfo.class
            ]}
            style={fixedInfo.styles}
          >
            <Checkbox
              modelValue={selectionSet.value.has(rowkey)}
              onChange={(checked) => toggleSelection(checked, row)}
            />
          </td>
        )
      )
    }
    return () => {
      return (
        <tbody class={ns.e('body')}>
          {filterTableData.value.map((row, index) => {
            const rowkey = getRowKey(row)
            return (
              <tr key={rowkey} class={ns.e('row')} {...renderRowProps(row, index)}>
                {/* render checkbox */}
                {renderSelection(rowkey, row)}
                {_columns.value.map((col, index) => renderHeaderTd(row, col, index))}
              </tr>
            )
          })}
        </tbody>
      )
    }
  }
})
