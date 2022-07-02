import { computed, Ref, renderSlot, Slots } from 'vue'
import { __TABLE_COLUMN } from '../table-column'
import { TableColumnType } from '../table-types'

export default function (columns: Ref<TableColumnType[]>, slots: Slots) {
  return computed(() => {
    if (columns.value && columns.value.length) {
      return columns.value
    } else {
      // 如果没有传columns,则查找 slots
      const children = slots.default?.() || []
      const columns = []
      for (const vnode of children) {
        const columnProps = (vnode.props as TableColumnType) || {}
        if (vnode.type && (vnode.type as any)[__TABLE_COLUMN]) {
          const children = vnode.children as any
          if (children) {
            if (typeof children.default === 'function') {
              columnProps.render = (row: any, index: number) =>
                renderSlot(children, 'default', {
                  row,
                  index
                })
            }
            // 传title插槽则用title插槽
            if (typeof children.title === 'function') {
              columnProps.title = children.title
            }
          }
          // 兼容 template写法 , template 传 ellipsis 得到 ''
          if (columnProps.ellipsis === '') columnProps.ellipsis = true
          columns.push(columnProps)
        } else {
          console.warn('Table 组件里只能是TableColumn组件')
        }
      }
      return columns
    }
  })
}
