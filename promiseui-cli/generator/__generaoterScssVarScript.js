const theme = {
  'base-bg': '#ffffff', //背景
  line: '#aea6ad', //边框
  shadow: 'rgba(37, 43, 58, 0.2)',
  brand: '#5e7ce0',
  'brand-hover': '#7693f5',
  'brand-active': '#344899',
  danger: '#f66f6a',
  'danger-active': '#b12220',
  warning: '#fac20a',
  'warning-active': '#cf9236',
  success: '#50d4ab',
  'success-active': '#67c23a',
  info: '#909399',
  'info-active': '#82848a',
  text: '#2f272f',
  waiting: '#9faad7',
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
