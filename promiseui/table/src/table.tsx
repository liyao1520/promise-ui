import { computed, defineComponent, inject, provide, ref, toRef } from 'vue'
import { tableProps, TableProps, TableStoreKey } from './table-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useDataSource from './hooks/use-data-source'
import TableBody from './table-body'
import TableHeader from './table-header'
import Empty from '../../shared/components/empty'
import { createStore } from './store'

export default defineComponent({
  name: 'PTable',
  props: tableProps,
  emits: [],
  setup(props: TableProps, { slots, expose, attrs }) {
    const tableRef = ref<HTMLElement>()
    const store = createStore(toRef(props, 'dataSource'), toRef(props, 'columns'), props)
    provide(TableStoreKey, store)
    const ns = useNamespace('table')
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('border')]: props.border,
      [ns.m('stripe')]: props.stripe
    }))
    const styles = computed(() => ({}))

    const filterTableData = store.state.filterTableData

    return () => {
      return (
        <div class={classes.value}>
          <table ref={tableRef} class={ns.e('table')} style={styles.value}>
            <TableHeader />
            <TableBody rowProps={props.rowProps} />
          </table>
          {filterTableData.value.length === 0 && (
            <Empty class={ns.e('empty')} description="无数据" />
          )}
        </div>
      )
    }
  }
})
