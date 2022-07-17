import { defineComponent, h, } from 'vue'
import DefaultTheme from './theme-default'

import theme from '../../../promiseui/theme'
import './custom.css'
const { Layout } = DefaultTheme
export default defineComponent({
  mounted() {
    // 黑暗模式设配
    const toggleTheme = (isDark: boolean) => {
      if (!isDark) {
        theme.use('light')
      } else {
        theme.use('dark')
      }
    }
    const observer = new MutationObserver((entries) => {
      entries.forEach((mutation) => {
        const target = mutation.target as HTMLHtmlElement
        toggleTheme(target.classList.contains('dark'))
      })
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    toggleTheme(document.documentElement.classList.contains('dark'))
  },
  render() {
    return h(Layout)
  }
})
