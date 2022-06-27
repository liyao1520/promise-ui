import { CaretDownSharp, CaretUpSharp } from '@vicons/ionicons5'
import { defineComponent, PropType, ref, watch } from 'vue'
import { Icon } from '../../icon'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useTableStore from './hooks/use-table-store'
import { Sorter } from './table-types'
type IStatus = '↑' | '↓' | ''
export default defineComponent({
  props: {
    sortMethod: { type: Function as PropType<Sorter>, required: true }
  },
  setup(props) {
    const { sortData } = useTableStore()
    const status = ref<IStatus>('')
    const ns = useNamespace('table')
    const handleSort = () => {
      if (status.value === '') {
        status.value = '↑'
        sortData('ASC', props.sortMethod)
      } else if (status.value === '↑') {
        status.value = '↓'
        sortData('DESC', props.sortMethod)
      } else {
        status.value = ''
        sortData('', props.sortMethod)
      }
    }
    watch(status, () => {})
    return () => {
      return (
        <div class={ns.e('sorter')} onClick={handleSort}>
          <Icon
            component={CaretUpSharp}
            class={{
              [ns.m('sorter-active')]: status.value === '↑'
            }}
          />
          <Icon
            component={CaretDownSharp}
            class={{
              [ns.m('sorter-active')]: status.value === '↓'
            }}
          />
        </div>
      )
    }
  }
})
