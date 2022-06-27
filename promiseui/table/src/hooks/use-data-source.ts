import { Ref } from 'vue'
import { DataSource } from '../table-types'
type SortDirection = 'ASC' | 'DASC' | string
export default (dataSource: Ref<DataSource>) => {
  // do something

  const sortData = (direction: SortDirection) => {}

  return {
    dataSource,
    sortData
  }
}
