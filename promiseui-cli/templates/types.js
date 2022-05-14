import { propsName, propsTypesName } from './utils'

export default function genTypesTemplate(name) {
  return `\
import type { PropType, ExtractPropTypes } from 'vue'

export const ${propsName(name)} = {
  \/\* test: {
    type: Object as PropType<{ xxx: xxx }>
  } \*\/
} as const

export type ${propsTypesName(name)} = ExtractPropTypes<typeof ${propsName(name)}>
`
}
