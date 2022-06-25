import { computed, defineComponent, ref, toRef } from 'vue'
import { tableProps, TableProps } from './table-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useDataSource from './hooks/use-data-source'
import TableBody from './table-body'
import TableHeader from './table-header'

export default defineComponent({
  name: 'PTable',
  props: tableProps,
  emits: [],
  setup(props: TableProps, { slots, expose, attrs }) {
    const tableRef = ref<HTMLElement>()
    const ns = useNamespace('table')
    const classes = computed(() => ({
      [ns.b()]: true
    }))
    const styles = computed(() => ({}))

    const dataSource = useDataSource(toRef(props, 'dataSource'))

    return () => {
      return (
        <table ref={tableRef} class={classes.value} style={styles.value}>
          <TableHeader columns={props.columns} />
          <TableBody columns={props.columns} dataSource={dataSource.value} />
        </table>
      )
    }
  }
})
