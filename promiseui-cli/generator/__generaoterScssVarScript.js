const theme = {
  'base-bg': '#ffffff', //背景
  line: '#aea6ad', //边框
  shadow: 'rgba(37, 43, 58, 0.2)',
  brand: '#5e7ce0',
  'brand-hover': '#7693f5',
  danger: '#f66f6a',
  warning: '#fac20a',
  waiting: '#9faad7',
  success: '#50d4ab',
  info: '#5e7ce0',
  text: '#2f272f',
  'text-weak': '#575d6c',
  'light-text': '#ffffff',
  'disabled-bg': '#f6f6f6',
  'disabled-line': '#dfe1e6',
  'disabled-text': '#cbcacb'
}
// $line : var(--line,"#aea6ad");
let str = ''
for (let [key, value] of Object.entries(theme)) {
  str += `$${key} : var(--promiseui-${key},${value});\n`
}
console.log(str)
