import { coreClassName, coreName, propsName, propsTypesName, typesFileName } from './utils'
export default function genCoreTemplate(name) {
  return `\
import { defineComponent } from 'vue'
import { ${propsName(name)}, ${propsTypesName(name)} } from './${typesFileName(name)}'

import "./index.scss"

export default defineComponent({
  name: 'P${coreName(name)}',
  props: ${propsName(name)},
  emits: [],
  setup(props: ${propsTypesName(name)}, ctx) {
    return () => {
      return (<div class="${coreClassName(name)}"></div>)
    }
  }
})
`
}
