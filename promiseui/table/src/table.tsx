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
    const headerRef = ref<HTMLElement>()
    const fixedTable = () => {
      const bodyStyles = {
        maxHeight: styleStringOrNumber(props.maxHeight),
        minHeight: styleStringOrNumber(props.minHeight)
      }
      const tableStyles: CSSProperties = {
        tableLayout: 'fixed',
        width: styleStringOrNumber(props.scrollX),
        minWidth: '100%'
      }
      let scrollLeft = 0
      const bodyScroll = (e: Event) => {
        const target = e.target as HTMLElement
        const _scrollLeft = target.scrollLeft
        if (scrollLeft !== _scrollLeft) {
          if (headerRef.value) headerRef.value.scrollLeft = _scrollLeft
        }
        scrollLeft = target.scrollLeft
      }

      return (
        <div class={classes.value}>
          <div class={ns.e('header-wrap')} ref={headerRef}>
            <table class={ns.e('table')} style={tableStyles}>
              <TableHeader />
              {renderColgroup()}
            </table>
          </div>
          <div class={ns.e('body-wrap')} style={bodyStyles} onScroll={bodyScroll}>
            <table class={ns.e('table')} style={tableStyles}>
              <TableBody rowProps={props.rowProps} />
              {renderColgroup()}
            </table>
          </div>
          {filterTableData.value.length === 0 && (
            <Empty class={ns.e('empty')} description="无数据" />
          )}
        </div>
      )
    }
    const isFixed = props.maxHeight || props.scrollX
    return () => {
      return isFixed ? fixedTable() : baseTable()
    }
  }
})
