import { defineComponent } from 'vue'
import { tableProps, TableProps } from './table-types'

import "./index.scss"

export default defineComponent({
  name: 'PTable',
  props: tableProps,
  emits: [],
  setup(props: TableProps, ctx) {
    return () => {
      return (<div class="pui-table"></div>)
    }
  }
})
