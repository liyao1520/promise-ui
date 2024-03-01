import { TableColumnType } from '../table-types'

export default function (col: TableColumnType) {
  return col.key != undefined
    ? col.key
    : Array.isArray(col.dataIndex)
      ? col.dataIndex.join('.')
      : col.dataIndex
}
