import { withModifiers } from 'vue'

export default (fn: (e?: any) => void) => {
  return withModifiers(fn, ['native'])
}
