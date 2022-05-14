import { coreClassName } from './utils'

export default function genStyleTemplate(name) {
  return `\
@import "../../styles-var";;

.${coreClassName(name)} {
  /* your style */
}`
}
