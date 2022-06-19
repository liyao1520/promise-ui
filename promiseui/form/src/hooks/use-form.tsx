import { inject, onMounted, Ref, computed, watch, ref } from 'vue'
import Schema, { Rule, ValidateError } from 'async-validator'
import { formContextKey, FormItemProps } from '../form-types'
import toArray from '../../../shared/utils/toArray'
const getValueByPathname = (pathname: string, target: any) => {
  const path = pathname.split('.')

  for (let name of path) {
    if (typeof target === 'undefined') {
      // 没有找到值
      return undefined
    }
    target = target[name]
  }
  return target
}
export default function (props: FormItemProps, labelRef: Ref<HTMLLabelElement | undefined>) {
  const FormContext = inject(formContextKey, undefined)
  const validateError = ref<null | ValidateError>()
  onMounted(() => {
    if (!labelRef.value) return
    const width = Number(getComputedStyle(labelRef.value).width.slice(0, -2))
    FormContext?.childLabelWidthRace(width)
  })

  const labelWidth = computed(() => {
    const maxChildLabelWidth = FormContext?.maxChildLabelWidth.value
    // form-item 设置labelWidth
    if (props.labelWidth === 'auto') {
      return maxChildLabelWidth + 'px'
    } else if (props.labelWidth) {
      return typeof props.labelWidth === 'number' ? props.labelWidth + 'px' : props.labelWidth
    } else {
      // props.label 没有值,继承form的label
      const FormLabelWidth = FormContext?.props.labelWidth
      if (FormLabelWidth === 'auto') {
        return maxChildLabelWidth + 'px'
      } else {
        return typeof FormLabelWidth === 'number' ? FormLabelWidth + 'px' : FormLabelWidth
      }
    }
  })

  const labelPosition = computed(() =>
    props.labelPosition ? props.labelPosition : FormContext?.props.labelPosition || 'right'
  )
  const formItemSize = computed(() => (props.size ? props.size : FormContext?.props.size || 'md'))

  const showLabel = computed(() =>
    props.showLabel ? props.showLabel : !!FormContext?.props.showLabel
  )
  const showRequireMark = computed(() =>
    props.showRequireMark ? props.showRequireMark : !!FormContext?.props.showRequireMark
  )

  const rules = computed(() => {
    const propsRules = toArray(props.rules)
    let formItemRules: Rule | undefined
    if (typeof props.name === 'string' && FormContext) {
      formItemRules = getValueByPathname(props.name, FormContext.props.rules)
    }

    return formItemRules ? propsRules.concat(formItemRules) : propsRules
  })
  const propsName = computed(() => {
    if (Array.isArray(props.name)) {
      return props.name.join('.')
    } else if (typeof props.name === 'string') {
      return props.name
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
    props.name && FormContext
      ? validator.value.validate(
          {
            [props.name]: getValueByPathname(props.name, FormContext.model)
          },
          { firstFields: true },
          (error) => {
            validateError.value = error ? error[0] : null
            if (error) {
              console.warn(`validate error! ${props.name}`, error)
            }
          }
        )
      : Promise.resolve([])
  if (FormContext?.model && props.name) {
    FormContext.addValidateFn(validateFn)
  }

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
