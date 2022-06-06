import { computed, defineComponent, toRefs } from 'vue'
import { switchProps, SwitchProps } from './switch-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import Wave from '../../utils/wave'

export default defineComponent({
  name: 'PSwitch',
  props: switchProps,
  emits: [],
  setup(props: SwitchProps, ctx) {
    const ns = useNamespace('switch')
    const {
      size,
      disabled,
      activeText,
      activeValue,
      activeColor,
      inactiveText,
      inactiveValue,
      inactiveColor
    } = toRefs(props)
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(size.value)]: true
    }))
    return () => {
      return (
        <Wave>
          <div class={classes.value}>
            <div class={ns.e('button')}></div>
          </div>
        </Wave>
      )
    }
  }
})
