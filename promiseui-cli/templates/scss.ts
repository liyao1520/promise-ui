import { coreRealName } from './utils'

export default function genStyleTemplate(name) {
  return `\
@import "../../styles-var";;

.#{$prefix}-${coreRealName(name)} {
  /* your style */
}`
}
