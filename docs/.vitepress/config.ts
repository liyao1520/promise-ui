import markDownPlugin from './plugins/vitepress-demo-editor/markdownPlugin'
import { UserConfig } from 'vitepress'
import sidebar from './sidebar.json'

const nav = [
  { text: '组件文档', link: '/quick-start/', target: '_self' },
  { text: 'Github', link: 'https://github.com/liyao1520/promise-ui', target: '_blank', rel: '' }
]

const config: UserConfig = {
  themeConfig: {
    sidebar,
    nav,
    search: true,
    logo: '/logo.svg'
  },

  title: 'PromiseUI',
  lang: 'zh-CN',
  description: '一个vue3组件库',
  markdown: {
    config: (md) => {
      // md.use(demoBlockPlugin, {})
      md.use(markDownPlugin, {})
    }
  }
}

export default config
