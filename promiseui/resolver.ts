export default (name: string) => {
  // where `componentName` is always CapitalCase
  if (name.match(/^P[A-Z]/)) return { name: name.slice(1), from: 'promiseui-vue' }
}
