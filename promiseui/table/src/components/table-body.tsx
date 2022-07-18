import { defineComponent } from 'vue'

import { Checkbox } from '../../../checkbox'
import { useNamespace } from '../../../shared/hooks/use-namespace'
import getValueByPathArray from '../../../shared/utils/getValueByPathArray'

import useCellClass from '../hooks/use-cell-class'

import useTableStore from '../hooks/use-table-store'
import { TableColumnType } from '../table-types'
import getColKey from '../utils/getColKey'
import getRowKey from '../utils/getRowKey'

export default defineComponent({
  name: 'PTableBody',

  setup(props) {
    const ns = useNamespace('table')
    const { state, tableProps, toggleSelection, getFixedInfo } = useTableStore()

    const { _columns, filterTableData, selectionSet } = state

    const renderBodyCell = (
      row: Record<string | symbol, any>,
      col: TableColumnType,
      index: number
    ) => {
      if (typeof col.render === 'function') {
        return col.render(row, index)
      } else {
        // 兼容 短横线写法
        col.dataIndex = col.dataIndex || (col as any)['data-index']
        return typeof col.dataIndex === 'string'
          ? row[col.dataIndex]
          : Array.isArray(col.dataIndex)
          ? getValueByPathArray(col.dataIndex, row)
          : undefined
      }
    }
    const renderCellProps = (
      row: object,
      col: TableColumnType,
      rowIndex: number,
      celIndex: number
    ) => {
      if (typeof tableProps.cellProps === 'function') {
        return tableProps.cellProps(row, col, rowIndex, celIndex)
      } else {
        return tableProps.cellProps || {}
      }
    }
    const renderHeaderTd = (
      row: Record<string | symbol, any>,
      col: TableColumnType,
      colIndex: number,
      rowIndex: number
    ) => {
      const fixedInfo = getFixedInfo('cell', colIndex)
      const content = renderBodyCell(row, col, rowIndex)
      return (
        <td
          key={getColKey(col)}
          class={[useCellClass(col), fixedInfo.class]}
          style={[{ textAlign: col.align }, fixedInfo.styles]}
          {...renderCellProps(row, col, rowIndex, colIndex)}
          title={col.ellipsis && content}
        >
          {content}
        </td>
      )
    }
    const renderRowProps = (row: any, index: number) => {
      if (typeof tableProps.rowProps === 'function') {
        return tableProps.rowProps(row, index)
      } else {
        return tableProps.rowProps || {}
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
          {filterTableData.value.map((row, rowIndex) => {
            const rowkey = getRowKey(row)
            return (
              <tr
                key={rowkey}
                class={[ns.e('row')]}
                {...renderRowProps(row, rowIndex)}
              >
                {/* render checkbox */}
                {renderSelection(rowkey, row)}
                {_columns.value.map((col, colIndex) =>
                  renderHeaderTd(row, col, colIndex, rowIndex)
                )}
              </tr>
            )
          })}
        </tbody>
      )
    }
  }
})
