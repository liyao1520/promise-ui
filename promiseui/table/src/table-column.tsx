import { defineComponent } from 'vue'
import { TableColumnType } from './table-types'
export const __TABLE_COLUMN = '__TABLE_COLUMN'
export default defineComponent<TableColumnType>({
  [__TABLE_COLUMN]: true,
  name: 'PTableColumn',
  render() {
    return null
  }
})
