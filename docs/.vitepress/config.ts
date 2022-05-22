import markDownPlugin from './plugins/vitepress-demo-editor/markdownPlugin'
import { UserConfig } from 'vitepress'

const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      children: [{ text: 'Button 按钮', link: '/components/button/' }]
    },
    {
      text: '导航'
    },
    {
      text: '反馈'
    },
    {
      text: '数据录入'
    },
    {
      text: '数据展示'
    },
    {
      text: '布局'
    }
  ]
}
const nav = [
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
