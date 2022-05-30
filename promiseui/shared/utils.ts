import { withModifiers } from 'vue'
export const inherit = Object.assign
export const nativeClick = (fn: () => void) => {
  return withModifiers(fn, ['native'])
}
