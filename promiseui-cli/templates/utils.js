export function propsTypesName(name) {
  name = name.replace(/^(.)/, (match, $1) => {
    return $1.toUpperCase()
  })
  return `${name}Props`
}
export function propsName(name) {
  return `${name}Props`
}
export function typesFileName(name) {
  return `${name}-types`
}
export function coreRealName(name) {
  return `${name}`
}

export function coreClassName(name) {
  return `p-${name}`
}
export function coreName(name) {
  return name.replace(/^(.)/, (match, $1) => {
    return $1.toUpperCase()
  })
}
