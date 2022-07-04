module.exports = () => {
  return (name) => {
    // where `componentName` is always CapitalCase
    if (name.match(/^P[A-Z]/))
      return {
        name: name.slice(1),
        from: 'promiseui-vue',
        sideEffects: [
          `promiseui-vue/dist/styles/${name.slice(1).toLocaleLowerCase()}.css`,
          `promiseui-vue/dist/base.css`
        ]
      }
  }
}
