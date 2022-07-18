import { inject, onMounted, Ref, computed, watch, ref } from 'vue'
import Schema, { Rule, RuleItem, ValidateError } from 'async-validator'
import { formContextKey, FormItemProps } from '../form-types'
import toArray from '../../../shared/utils/toArray'
import useFormSize from './use-form-size'
import getValueByPathname from '../../../shared/utils/getValueByPathname'

const findRequiredRule = (rules: RuleItem[]) => {
  return !!rules.find((rule) => rule.required)
}
export default function (
  props: FormItemProps,
  labelRef: Ref<HTMLLabelElement | undefined>
) {
  const FormContext = inject(formContextKey, undefined)
  const validateError = ref<null | ValidateError>()
  const childLabelWidthRace = () => {
    if (!labelRef.value) return
    const width = Number(getComputedStyle(labelRef.value).width.slice(0, -2))
    FormContext?.childLabelWidthRace(width)
  }

  onMounted(() => {
    childLabelWidthRace()
  })

  watch(
    useFormSize(),
    () => {
      childLabelWidthRace()
    },
    { flush: 'post' }
  )

  const labelWidth = computed(() => {
    const maxChildLabelWidth = FormContext?.maxChildLabelWidth.value
    // form-item 设置labelWidth
    if (props.labelWidth === 'auto') {
      return maxChildLabelWidth + 'px'
    } else if (props.labelWidth) {
      return typeof props.labelWidth === 'number'
        ? props.labelWidth + 'px'
        : props.labelWidth
    } else {
      // props.label 没有值,继承form的label
      const FormLabelWidth = FormContext?.props.labelWidth

      if (FormLabelWidth === 'auto') {
        return maxChildLabelWidth
          ? maxChildLabelWidth + 'px'
          : maxChildLabelWidth
      } else {
        return typeof FormLabelWidth === 'number'
          ? FormLabelWidth + 'px'
          : FormLabelWidth
      }
    }
  })

  const labelPosition = computed(() =>
    props.labelPosition
      ? props.labelPosition
      : FormContext?.props.labelPosition || 'right'
  )
  const formItemSize = computed(() =>
    props.size ? props.size : FormContext?.props.size || 'md'
  )

  const showLabel = computed(() =>
    props.showLabel ? props.showLabel : !!FormContext?.props.showLabel
  )
  const showRequireMark = computed(() => {
    if (props.showRequireMark !== undefined) return props.showRequireMark

    return (
      !!FormContext?.props.showRequireMark && findRequiredRule(getMergeRules())
    )
  })
  const getMergeRules = () => {
    const propsRules = toArray(props.rules)
    if (props.required) {
      propsRules.push({
        required: true,
        message: typeof props.required === 'string' ? props.required : undefined
      })
    }
    let formRules: Rule | undefined
    if (typeof props.prop === 'string' && FormContext) {
      formRules = getValueByPathname(props.prop, FormContext.props.rules)
    }

    const mergeRules = formRules ? propsRules.concat(formRules) : propsRules

    return mergeRules
  }

  const rules = computed(() => {
    return getMergeRules()
  })

  const propsName = computed(() => {
    if (Array.isArray(props.prop)) {
      return props.prop.join('.')
    } else if (typeof props.prop === 'string') {
      return props.prop
    }
    return ''
  })
  const validator = computed(
    () =>
      new Schema({
        [propsName.value]: rules.value
      })
  )
  const validateFn = () =>
    props.prop && FormContext
      ? validator.value.validate(
          {
            [props.prop]: getValueByPathname(props.prop, FormContext.model)
          },
          { firstFields: true },
          (error) => {
            validateError.value = error ? error[0] : null
            if (error) {
              console.warn(`validate error! ${props.prop}`, error)
            }
          }
        )
      : Promise.resolve([])
  if (FormContext?.model && props.prop) {
    FormContext.addValidateFn({ validateFn, prop: props.prop })
  }
  FormContext?.onClearValidate(() => {
    validateError.value = null
  }, props.prop)
  return {
    labelWidth,
    labelPosition,
    formItemSize,
    showLabel,
    showRequireMark,
    validator,
    validateError,
    validateFn
  }
}
