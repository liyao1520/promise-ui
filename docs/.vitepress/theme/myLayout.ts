import { defineComponent, h, onMounted } from 'vue'
import DefaultTheme from 'vitepress/theme'
import theme from '../../../promiseui/theme'
const { Layout } = DefaultTheme
export default defineComponent({
  setup() {
    onMounted(() => {
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
    })
    return () => h(Layout)
  }
})
