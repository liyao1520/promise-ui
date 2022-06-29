const styleStringOrNumber = (style: string | number | undefined) => {
  if (typeof style === 'string') {
    return style
  } else if (typeof style === 'number') {
    return style + 'px'
  } else {
    return undefined
  }
}
export default styleStringOrNumber
