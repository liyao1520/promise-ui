import { defineComponent, PropType, Slot } from 'vue'
import { Checkbox } from '../../../checkbox'
import { useNamespace } from '../../../shared/hooks/use-namespace'
import getValueByPathArray from '../../../shared/utils/getValueByPathArray'

import useCellClass from '../hooks/use-cell-class'

import useTableStore from '../hooks/use-table-store'
import { ColumnTemplateRender, TableColumnType } from '../table-types'
import getColKey from '../utils/getColKey'
import getRowKey from '../utils/getRowKey'

export default defineComponent({
  name: 'PTableBody',
  props: {
    rowProps: Function as PropType<(row: any, rowIndex: number) => object>,
    bodyCellSlot: Function as PropType<Slot>
  },

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
        return typeof col.dataIndex === 'string'
          ? row[col.dataIndex]
          : Array.isArray(col.dataIndex)
          ? getValueByPathArray(col.dataIndex, row)
          : undefined
      }
    }
    const renderHeaderTd = (
      row: Record<string | symbol, any>,
      col: TableColumnType,
      colIndex: number,
      rowIndex: number
    ) => {
      const fixedInfo = getFixedInfo('cell', colIndex)
      return (
        <td
          class={[useCellClass(col), fixedInfo.class]}
          key={getColKey(col)}
          style={fixedInfo.styles}
        >
          {renderBodyCell(row, col, rowIndex)}
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
          {filterTableData.value.map((row, rowIndex) => {
            const rowkey = getRowKey(row)
            return (
              <tr key={rowkey} class={ns.e('row')} {...renderRowProps(row, rowIndex)}>
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
