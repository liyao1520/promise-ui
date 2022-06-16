import { computed, defineComponent } from 'vue'
import { tagProps, TagProps } from './tag-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { Icon } from '../../icon'
import { CloseSharp } from '@vicons/ionicons5'

export default defineComponent({
  name: 'PTag',
  props: tagProps,
  emits: ['close'],
  setup(props: TagProps, { slots, emit }) {
    const ns = useNamespace('tag')
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.e(props.size)]: true,
      [ns.e(props.type)]: true,
      [ns.m('disabled')]: props.disabled
    }))
    const onClose = () => {
      if (props.disabled) return
      emit('close')
    }
    return () => {
      return (
        <div class={classes.value}>
          {slots.default?.()}
          <Icon component={CloseSharp} onClick={onClose} />
        </div>
      )
    }
  }
})
