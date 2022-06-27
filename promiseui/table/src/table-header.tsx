import { computed, defineComponent, PropType } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { TableColumn } from './table-types'

export default defineComponent({
  name: 'PTableHeader',
  props: {
    columns: {
      type: Array as PropType<TableColumn[]>,
      default: () => []
    }
  },
  setup(props) {
    const ns = useNamespace('table')
    const classes = computed(() => ({
      [ns.e('header')]: true
    }))
    return () => (
      <thead class={classes.value}>
        <tr>
          {props.columns.map((item) => (
            <th class={ns.e('cell')}>{item.title}</th>
          ))}
        </tr>
      </thead>
    )
  }
})
