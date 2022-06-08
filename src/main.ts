import { createApp } from 'vue'

import App from './App.vue'
import PromiseUI from '../promiseui/vue-promiseui'
import theme from '../promiseui/theme'
theme.use('light')
import '../promiseui/styles/index.scss'
const app = createApp(App)

app.use(PromiseUI)
app.mount('#app')
import './app.css'
