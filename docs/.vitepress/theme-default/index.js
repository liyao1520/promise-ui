import './styles/vars.css'
import './styles/layout.css'
import './styles/code.css'
import './styles/custom-blocks.css'
import './styles/sidebar-links.css'
import Layout from './Layout.vue'
import NotFound from './NotFound.vue'
import PTheme from '../../../promiseui/theme'
PTheme.use('light')
const theme = {
  Layout,
  NotFound
}

// 导入主题

export default theme
