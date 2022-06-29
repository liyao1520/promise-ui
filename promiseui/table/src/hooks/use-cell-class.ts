import { TableColumn } from '../table-types'
import { useNamespace } from './../../../shared/hooks/use-namespace'
export default function (col: TableColumn) {
  const ns = useNamespace('table')
  return {
    [ns.e('cell')]: true,
    [ns.em('cell', 'fixed-left')]: col.fixed === 'left',
    [ns.em('cell', 'fixed-right')]: col.fixed === 'right'
  }
}
