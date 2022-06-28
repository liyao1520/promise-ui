import { computed, defineComponent, SetupContext } from 'vue'
import Wave from '../../shared/components/wave'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { checkboxProps, CheckboxProps } from './checkbox-types'
import { CheckmarkSharp, RemoveSharp } from '@vicons/ionicons5'
import './index.scss'
import { Icon } from '../../icon'
import useCheckbox from './hooks/use-checkbox'
import useFormSize from '../../form/src/hooks/use-form-size'

export default defineComponent({
  name: 'PCheckbox',
  props: checkboxProps,
  emits: ['update:modelValue', 'change'],
  setup(props: CheckboxProps, ctx) {
    const ns = useNamespace('checkbox')

    const { handleClick, checked, disabled, size } = useCheckbox(props, ctx as SetupContext)
    const formSize = useFormSize()

    const checkBox = computed(() => size.value || formSize.value || 'md')

    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(checkBox.value)]: true,
      [ns.m('checked')]: checked.value || props.indeterminate,
      [ns.m('disabled')]: disabled.value
    }))
    const renderIcon = () => {
      if (props.indeterminate || checked.value) {
        return (
          <Icon component={props.indeterminate ? RemoveSharp : CheckmarkSharp} color="#ffffff" />
        )
      }

      return null
    }

    return () => {
      return (
        <div class={classes.value} onClick={handleClick}>
          <Wave>
            <div class={ns.e('border')}>
              <div class={ns.e('icon')}>{renderIcon()}</div>
            </div>
          </Wave>

          {props.label && <label class={ns.e('label')}>{props.label}</label>}
        </div>
      )
    }
  }
})
