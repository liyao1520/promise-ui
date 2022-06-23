import type { App } from 'vue';
import Table from './src/table';

export * from './src/table-types';

export { Table };

export default {
  title: 'Table 表格',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.component(Table.name, Table);
  },
};
  