import { Values } from 'async-validator'
import { defineComponent, provide, computed, ref, watch } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import { formContextKey, formProps, FormProps } from './form-types'

import './index.scss'

export default defineComponent({
  name: 'PForm',
  props: formProps,
  emits: [],
  setup(props: FormProps, ctx) {
    const ns = useNamespace('form')
    const maxChildLabelWidth = ref<number>()
    const classes = computed(() => ({
      [ns.b()]: true,
      [ns.m('inline')]: props.inline
    }))

    const childLabelWidthRace = (width: number) => {
      if (maxChildLabelWidth.value === undefined || width > maxChildLabelWidth.value) {
        maxChildLabelWidth.value = width
      }
    }
    const clearLabelWidth = () => {
      maxChildLabelWidth.value = undefined
    }
    watch(
      () => props.size,
      () => {
        clearLabelWidth()
      }
    )
    const validateFns: (() => Promise<Values>)[] = []

    const addValidateFn = (validateFn: () => Promise<Values>): void => {
      validateFns.push(validateFn)
    }

    const fromValidate = async () => {
      let fulfilled = true
      for (const validator of validateFns) {
        try {
          await validator()
        } catch (e) {
          fulfilled = false
        }
      }
      return fulfilled
    }

    provide(formContextKey, {
      props,
      maxChildLabelWidth,
      childLabelWidthRace,
      model: props.model,
      addValidateFn
    })
    ctx.expose({
      validate: fromValidate
    })
    const onSubmit = (e: Event) => {
      e.preventDefault()
    }
    return () => {
      return (
        <form class={classes.value} onSubmit={onSubmit}>
          {ctx.slots.default?.()}
        </form>
      )
    }
  }
})
