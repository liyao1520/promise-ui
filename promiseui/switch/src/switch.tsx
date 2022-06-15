import { computed, defineComponent, ref, watch } from 'vue'
import { switchProps, SwitchProps } from './switch-types'
import { useNamespace } from '../../shared/hooks/use-namespace'
import Wave from '../../shared/components/wave'
import { commonType } from '../../shared/common'
import './index.scss'
import IconLoading from '../../shared/components/loading'

export default defineComponent({
  name: 'PSwitch',
  props: switchProps,
  emits: ['update:modelValue', 'change'],
  setup(props: SwitchProps, { emit, slots }) {
    const ns = useNamespace('switch')
    const checked = computed(() => {
      return props.modelValue === props.activeValue
    })
    const loading = ref(false)

    const isCustomActiveColor = computed(() => !commonType.includes(props.activeColor))

    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(props.size)]: true,
      [ns.m('checked')]: checked.value,
      [ns.m(props.activeColor)]: !isCustomActiveColor.value,
      [ns.m('disabled')]: props.disabled,
      [ns.m('custom-active-color')]: isCustomActiveColor.value
    }))

    const styles = computed(() => ({
      '--switch-custom-active-color': props.activeColor
    }))

    const onClick = async () => {
      if (props.disabled) return
      if (loading.value) return
      const val = checked.value ? props.inactiveValue : props.activeValue
      if (props.onBeforeChange) {
        const result = props.onBeforeChange()
        let allow = true
        //判断是不是promise
        if (Object.prototype.toString.call(result) === '[object Promise]') {
          loading.value = true
          try {
            allow = !!(await result)
            loading.value = false
          } catch (e) {
            loading.value = false
            throw e
          }
        } else {
          allow = !!result
        }

        if (allow) emit('update:modelValue', val)
      } else {
        emit('update:modelValue', val)
      }
    }

    watch(
      () => props.modelValue,
      (val) => {
        emit('change', val)
      }
    )

    return () => {
      return (
        <Wave disabled={props.disabled}>
          <div class={classes.value} style={styles.value} onClick={onClick}>
            <div class={ns.e('button')}>{loading.value && <IconLoading />}</div>
            <div class={ns.e('message')}>
              {checked.value ? props.activeText : props.inactiveText}
              {checked.value ? slots.checked?.() : slots.unChecked?.()}
            </div>
          </div>
        </Wave>
      )
    }
  }
})
