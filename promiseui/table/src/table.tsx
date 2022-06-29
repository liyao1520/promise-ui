import { computed, CSSProperties, defineComponent, inject, provide, ref, toRef } from 'vue'
import { TableColumn, tableProps, TableProps, TableStoreKey } from './table-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'

import TableBody from './table-body'
import TableHeader from './table-header'
import Empty from '../../shared/components/empty'
import { createStore } from './store'
import styleStringOrNumber from '../../shared/utils/styleStringOrNumber'

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
    const styles = computed<CSSProperties>(() => ({
      tableLayout: props.tableLayout
    }))

    const columStyles = (col: TableColumn): CSSProperties => {
      return {
        width: styleStringOrNumber(col.width),
        maxWidth: styleStringOrNumber(col.maxWidth),
        minWidth: styleStringOrNumber(col.minWidth),
        textAlign: col.align
      }
    }
    const filterTableData = store.state.filterTableData
    const renderColgroup = () => (
      <colgroup>
        {props.rowSelection && <col style={props.rowSelection.style}></col>}
        {store.state._columns.value.map((col) => (
          <col style={columStyles(col)}></col>
        ))}
      </colgroup>
    )

    const baseTable = () => (
      <div class={classes.value}>
        <table class={ns.e('table')}>
          <TableHeader renderColgroup={renderColgroup} />
          <TableBody rowProps={props.rowProps} renderColgroup={renderColgroup} />
          {filterTableData.value.length === 0 && (
            <Empty class={ns.e('empty')} description="无数据" />
          )}
        </table>
      </div>
    )
    const fixedTable = () => (
      <div class={classes.value}>
        <table class={ns.e('table')}>
          <div class={ns.e('header')}>
            <table class={ns.e('table')} style={{ tableLayout: 'fixed' }}>
              <TableHeader />
              {renderColgroup()}
            </table>
          </div>
          <div class={ns.e('body')}>
            <table class={ns.e('table')} style={{ tableLayout: 'fixed' }}>
              <TableBody rowProps={props.rowProps} />
              {renderColgroup()}
            </table>
          </div>
          {filterTableData.value.length === 0 && (
            <Empty class={ns.e('empty')} description="无数据" />
          )}
        </table>
      </div>
    )
    return () => {
      return baseTable()
    }
  }
})
