import { computed, defineComponent, ref, SetupContext, watch } from 'vue'
import { radioProps, RadioProps } from './radio-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import Wave from '../../shared/components/wave'
import useRadio from './hooks/use-radio'

export default defineComponent({
  name: 'PRadio',
  props: radioProps,
  emits: ['update:modelValue', 'change'],
  setup(props: RadioProps, ctx) {
    const { slots, emit } = ctx
    const ns = useNamespace('radio')
    const wareRef = ref<any>()

    const { checked, inputName, handleChange, size } = useRadio(props, ctx as SetupContext)

    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('checked')]: checked.value,
      [ns.m('disabled')]: props.disabled,
      [ns.m(size.value)]: true
    }))

    watch(
      () => props.modelValue,
      () => {
        emit('change', props.modelValue)
      }
    )

    return () => {
      return (
        <label class={classes.value} onClick={(_) => wareRef.value.run()}>
          <input
            class={ns.e('input')}
            type="radio"
            name={inputName.value}
            onChange={handleChange}
            value={props.value}
            disabled={props.disabled}
            checked={checked.value}
          />
          <Wave ref={wareRef}>
            <span class={ns.e('inner')}></span>
          </Wave>
          <span class={ns.e('label')}>{slots.default?.() || props.label}</span>
        </label>
      )
    }
  }
})
