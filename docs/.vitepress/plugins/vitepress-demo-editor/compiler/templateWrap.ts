export const templateWrap = (content: string) => {
  return content.replace(/\<template.*?\>(.*)\<\/template.*?\>/s, (match, p1) => {
    // console.log(p1, match)
    return `<template><div style='height:100%;padding: 10px;'>${p1}</div></template>`
  })
}
