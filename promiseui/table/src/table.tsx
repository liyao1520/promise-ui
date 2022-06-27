import { computed, defineComponent, ref, toRef } from 'vue'
import { tableProps, TableProps } from './table-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useDataSource from './hooks/use-data-source'
import TableBody from './table-body'
import TableHeader from './table-header'
import Empty from '../../shared/components/empty'

export default defineComponent({
  name: 'PTable',
  props: tableProps,
  emits: [],
  setup(props: TableProps, { slots, expose, attrs }) {
    const tableRef = ref<HTMLElement>()
    const ns = useNamespace('table')
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('border')]: props.border,
      [ns.m('stripe')]: props.stripe
    }))
    const styles = computed(() => ({}))

    const dataSource = useDataSource(toRef(props, 'dataSource'))

    return () => {
      return (
        <div class={classes.value}>
          <table ref={tableRef} class={ns.e('table')} style={styles.value}>
            <TableHeader columns={props.columns} />
            <TableBody columns={props.columns} dataSource={dataSource.value} />
          </table>
          {dataSource.value.length === 0 && <Empty class={ns.e('empty')} description="无数据" />}
        </div>
      )
    }
  }
})
