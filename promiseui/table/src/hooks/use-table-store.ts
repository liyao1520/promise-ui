import { TableStore, TableStoreKey } from './../table-types'
import { inject } from 'vue'

const useTableStore = () => {
  const store = inject(TableStoreKey, undefined) as TableStore

  return store
}

export default useTableStore
