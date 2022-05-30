import { computed, defineComponent, ref, SetupContext, toRefs, withModifiers } from 'vue'
import { CloseSharp, EyeOffSharp, EyeSharp } from '@vicons/ionicons5'
import { Icon } from '../../icon'
import { inputProps, InputProps } from './input-types'

import './index.scss'
import { useNamespace } from '../../shared/hooks/use-namespace'
import useEvent from './hooks/use-event'
import { nativeClick } from '../../shared/utils'

export default defineComponent({
  name: 'PInput',
  props: inputProps,
  inheritAttrs: false,
  emits: ['update:modelValue', 'input', 'blur', 'focus'],
  setup(props: InputProps, ctx: SetupContext) {
    const { attrs, slots, emit } = ctx
    const { size, disabled, modelValue, clearable, showPassword } = toRefs(props)
    const ns = useNamespace('input')
    const focused = ref(false)
    const isPasswordType = ref(showPassword.value)
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m(size.value)]: true,
      [ns.m('disabled')]: disabled.value,
      [ns.m('focus')]: focused.value
    }))

    const { onInput, onFocus, onBlur } = useEvent(props, ctx, focused)

    const renderSuffix = () => {
      if (showPassword.value) {
        return (
          <Icon
            size={16}
            class={ns.e('icon')}
            component={isPasswordType.value ? EyeOffSharp : EyeSharp}
            onClick={nativeClick(() => (isPasswordType.value = !isPasswordType.value))}
          ></Icon>
        )
      }
      if (clearable.value) {
        return (
          <Icon
            class={ns.e('icon')}
            size={16}
            onClick={nativeClick(() => emit('update:modelValue', ''))}
          >
            <CloseSharp />
          </Icon>
        )
      }
      return slots.suffix && slots.suffix()
    }
    const renderPrefix = () => {
      return slots.prefix && slots.prefix()
    }

    return () => {
      return (
        <div class={classes.value}>
          {slots.prepend && <span class={ns.e('prepend')}>{slots.prepend()}</span>}

          <span class={ns.e('prefix')}>{renderPrefix()}</span>
          <input
            type={isPasswordType.value ? 'password' : 'text'}
            class={ns.e('inner')}
            value={modelValue.value}
            {...attrs}
            disabled={disabled.value}
            onInput={onInput}
            onFocus={onFocus}
            onBlur={onBlur}
          />

          <span class={ns.e('suffix')}>{renderSuffix()}</span>
          {slots.append && <span class={ns.e('append')}>{slots.append()}</span>}
        </div>
      )
    }
  }
})
