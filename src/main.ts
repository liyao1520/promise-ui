import { createApp } from 'vue'

import App from './App.vue'
import PromiseUI from '../promiseui'

import theme from '../promiseui/theme'
theme.use('light')
const div = document.createElement('div')
div.style.setProperty('position', 'fixed')
div.style.setProperty('bottom', '0')
div.style.setProperty('right', '0')
div.style.setProperty('color', 'blue')
div.textContent = '切换'
let light = true
div.addEventListener('click', () => {
  theme.use(light ? 'dark' : 'light')
  light = !light
  document.body.style.background = light ? '#ffffff' : '#141414'
})
document.body.appendChild(div)
import '../promiseui/styles/index.scss'
const app = createApp(App)

app.use(PromiseUI)
app.mount('#app')
import './app.css'
