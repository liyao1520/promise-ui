import { ValidateFieldsError, Values } from 'async-validator'
import { defineComponent, provide, computed, ref, watch } from 'vue'
import { useNamespace } from '../../shared/hooks/use-namespace'
import {
  formContextKey,
  formProps,
  FormProps,
  IValidateInfo
} from './form-types'

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
      if (
        maxChildLabelWidth.value === undefined ||
        width > maxChildLabelWidth.value
      ) {
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

    type callback = (isValid: boolean) => void

    const validateFns: IValidateInfo[] = []
    const onClearValidateCallbacks: [() => void, string | undefined][] = []
    const addValidateFn = (validateInfo: IValidateInfo): void => {
      validateFns.push(validateInfo)
    }

    const fromValidate = async (validateCallback?: callback) => {
      let isValid = true
      for (const { validateFn } of validateFns) {
        try {
          await validateFn()
        } catch (e) {
          isValid = false
        }
      }
      validateCallback?.(isValid)
      return isValid
    }
    const formValidateFields = async (
      fields: string[],
      validateCallback?: callback
    ) => {
      let isValid = true
      for (const fieldName of fields) {
        const res = validateFns.find((item) => item.prop === fieldName)
        if (res) {
          try {
            await res.validateFn()
          } catch (e) {
            isValid = false
          }
        }
      }
      validateCallback?.(isValid)
      return isValid
    }
    const onClearValidate = (cb: () => void, prop: string | undefined) => {
      onClearValidateCallbacks.push([cb, prop])
    }
    const clearValidate = (fields?: string[]) => {
      for (const [cb, prop] of onClearValidateCallbacks) {
        if (!fields) {
          cb()
        } else {
          if (prop && fields.includes(prop)) {
            cb()
          }
        }
      }
    }

    provide(formContextKey, {
      props,
      maxChildLabelWidth,
      childLabelWidthRace,
      model: props.model,
      addValidateFn,
      onClearValidate
    })
    ctx.expose({
      validate: fromValidate,
      validateFields: formValidateFields,
      clearValidate
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
