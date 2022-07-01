import type { App } from 'vue'
import Table from './src/table'
import TableColumn from './src/table-column'
export * from './src/table-types'

export { Table, TableColumn }

export default {
  title: 'Table 表格',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(Table.name, Table)
    app.component(TableColumn.name, TableColumn)
  }
}
