type Fn = () => void
const cbs: Fn[] = []
let isLoaded = false
export function onUILoaded(fn: Fn) {
  if (isLoaded) {
    fn()
  } else {
    cbs.push(fn)
  }
}
export function emitUILoaded() {
  cbs.forEach((cb) => cb())
  isLoaded = true
}
