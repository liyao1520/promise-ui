const getValueByPathArray = (patharray: string[], target: any) => {
  const path = patharray

  for (const name of path) {
    if (typeof target === 'undefined') {
      // 没有找到值
      return undefined
    }
    target = target[name]
  }

  return target
}
export default getValueByPathArray
