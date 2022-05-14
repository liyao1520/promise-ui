import { coreClassName } from './utils'

export default function genStyleTemplate(name) {
  return `\
.${coreClassName(name)} {
  /* your style */
}`
}
