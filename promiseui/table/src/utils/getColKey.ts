import { TableColumn } from '../table-types'

export default function (col: TableColumn) {
  return col.key != undefined
    ? col.key
    : Array.isArray(col.dataIndex)
    ? col.dataIndex.join('.')
    : col.dataIndex
}
