import { computed, ref, Ref } from 'vue'
import { selectProps } from '../../../select'
import { useNamespace } from '../../../shared/hooks/use-namespace'
import { RowSelection, TableColumn } from '../table-types'

export default function (_columns: Ref<TableColumn[]>, rowSelection: RowSelection | undefined) {
  const offsetlefts: Ref<{
    selection: number
    cell: number[]
  }> = ref({
    selection: 0,
    cell: []
  })
  let rowWidth: number = 0
  const fixeds = computed(() => {
    const cellFixeds = _columns.value.map((item) => ({
      fixed: item.fixed,
      last: false,
      first: false
    }))
    let lastIndex: number | undefined = undefined
    let firstIndex: number | undefined = undefined
    for (let i = 0; i < _columns.value.length; i++) {
      const col = _columns.value[i]
      if (firstIndex === undefined && col.fixed && col.fixed === 'right') {
        firstIndex = i
      }
      if (col.fixed && col.fixed === 'left') {
        lastIndex = i
      }
    }

    if (lastIndex !== undefined) {
      cellFixeds[lastIndex].last = true
    }
    if (firstIndex !== undefined) {
      cellFixeds[firstIndex].first = true
    }

    return {
      cell: cellFixeds,
      selection: rowSelection?.fixed
        ? {
            fixed: rowSelection.fixed && 'left',
            last: lastIndex === undefined,
            first: false
          }
        : undefined
    }
  })

  const setFixedStyle = (_offsetlefts: number[]) => {
    offsetlefts.value = {
      selection: selectProps ? _offsetlefts[0] : 0,
      cell: selectProps ? _offsetlefts.slice(1) : _offsetlefts
    }
  }

  const getFixedInfo = (type: 'cell' | 'selection', index: number) => {
    let fixed: string | undefined = ''
    let styles = {}
    let first = false
    let last = false
    if (type === 'selection') {
      fixed = fixeds.value.selection?.fixed
      last = fixeds.value.selection?.last || false
      if (fixed) {
        styles = { left: offsetlefts.value.selection + 'px' }
      } else {
        styles = {}
      }
    } else if (type === 'cell') {
      const cellFixedInfo = fixeds.value.cell[index]
      fixed = cellFixedInfo.fixed
      first = cellFixedInfo.first
      last = cellFixedInfo.last
      if (fixed === 'left') {
        styles = { left: offsetlefts.value.cell[index] + 'px' }
      } else if (fixed === 'right') {
        styles = { left: offsetlefts.value.cell[index] + 'px' }
      } else {
        styles = {}
      }
    } else {
      fixed = ''
      styles = {}
    }
    let className: string | undefined = undefined
    const ns = useNamespace('table')
    if (first) {
      className = ns.em('cell', 'fixed-right-first')
    }
    if (last) {
      className = ns.em('cell', 'fixed-left-last')
    }
    return {
      styles,
      class: className
    }
  }
  return { getFixedInfo, setFixedStyle }
}
