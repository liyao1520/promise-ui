import {
  computed,
  CSSProperties,
  defineComponent,
  nextTick,
  provide,
  ref,
  toRef
} from 'vue'
import {
  TableColumnType,
  tableProps,
  TableProps,
  TableStoreKey
} from './table-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'

import TableBody from './components/table-body'
import TableHeader from './components/table-header'
import Empty from '../../shared/components/empty'
import { createStore } from './store'
import styleStringOrNumber from '../../shared/utils/styleStringOrNumber'
import { Scrollbar } from '../../scrollbar'

export default defineComponent({
  name: 'PTable',
  props: tableProps,
  emits: [],
  setup(props: TableProps, { slots }) {
    const tableRef = ref<HTMLElement>()
    const store = createStore(
      toRef(props, 'dataSource'),
      toRef(props, 'columns'),
      props,
      tableRef,
      slots
    )
    // 提供子组件使用
    provide(TableStoreKey, store)

    const ns = useNamespace('table')
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('border')]: props.border,
      [ns.m('stripe')]: props.stripe,
      [ns.m(props.size)]: true,
      [ns.m('isleft')]: true //默认在left
    }))

    const columnStyles = (col: TableColumnType): CSSProperties => {
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
        {/* 选择框 */}
        {props.rowSelection && <col style={props.rowSelection.style}></col>}
        {/* 普通列 */}
        {store.state._columns.value.map((col, index) => (
          <col style={columnStyles(col)} key={index}></col>
        ))}
      </colgroup>
    )

    const baseTable = () => (
      <div class={classes.value} ref={tableRef}>
        <table class={ns.e('table')} style={{ tableLayout: props.tableLayout }}>
          {renderColgroup()}
          {props.showHeader && <TableHeader />}
          <TableBody />
        </table>
        {filterTableData.value.length === 0 && (
          <Empty class={ns.e('empty')} description="无数据" />
        )}
      </div>
    )
    const headerRef = ref<HTMLElement>()
    const fixedTable = () => {
      const bodyStyles = {
        maxHeight: styleStringOrNumber(props.maxHeight),
        minHeight: styleStringOrNumber(props.minHeight)
      }
      const fixedTableStyles: CSSProperties = {
        tableLayout: 'fixed',
        width: styleStringOrNumber(props.scrollX),
        minWidth: '100%'
      }
      let scrollLeft = 0
      const bodyScroll = (e: Event) => {
        const target = e.target as HTMLElement
        const _scrollLeft = target.scrollLeft
        if (headerRef.value) headerRef.value.scrollLeft = _scrollLeft

        scrollLeft = _scrollLeft

        if (scrollLeft === 0) {
          store.setScrollXPosition('left')
        } else if (scrollLeft + target.clientWidth + 1 < target.scrollWidth) {
          store.setScrollXPosition('')
        } else {
          store.setScrollXPosition('right')
        }
      }

      return (
        <div class={classes.value} ref={tableRef}>
          <div class={[ns.e('header-wrap')]} ref={headerRef}>
            <table class={ns.e('table')} style={fixedTableStyles}>
              {props.showHeader && <TableHeader />}
              {renderColgroup()}
            </table>
          </div>
          <Scrollbar onScroll={bodyScroll} viewStyle={bodyStyles}>
            <table class={ns.e('table')} style={fixedTableStyles}>
              <TableBody />
              {renderColgroup()}
            </table>
          </Scrollbar>
          {filterTableData.value.length === 0 && (
            <Empty class={ns.e('empty')} description="无数据" />
          )}
        </div>
      )
    }
    const isFixed = props.maxHeight || props.scrollX
    return () => {
      nextTick(() => {
        const fixeds = Array.from(
          headerRef.value?.querySelectorAll('th') || []
        ).map((item) => item.offsetLeft)
        store.setFixedStyle(fixeds)
      })
      return isFixed ? fixedTable() : baseTable()
    }
  }
})
