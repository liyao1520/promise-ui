function toArray<T extends Array<unknown> | unknown>(
  target: T
): T extends Array<unknown> ? T : T[]
function toArray<T>(target: T) {
  if (target == null) {
    return []
  }
  if (Array.isArray(target)) {
    return target
  } else {
    return [target]
  }
}
export default toArray
