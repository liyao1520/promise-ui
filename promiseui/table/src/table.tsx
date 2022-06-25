import { computed, defineComponent } from 'vue'
import { tableProps, TableProps } from './table-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'

export default defineComponent({
  name: 'PTable',
  props: tableProps,
  emits: [],
  setup(props: TableProps, ctx) {
    const ns = useNamespace('table')
    const classes = computed(() => ({
      [ns.b()]: true
    }))
    const styles = computed(() => ({}))
    return () => {
      return <table class={classes.value} styles={styles.value}>
        
      </table>
    }
  }
})
