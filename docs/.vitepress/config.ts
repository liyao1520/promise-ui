import { UserConfig } from 'vitepress'
// 这里可以使用 markdown-it 插件，vitepress-theme-demoblock就是基于此开发的
const { demoBlockPlugin } = require('vitepress-theme-demoblock')
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
      md.use(demoBlockPlugin)
    }
  }
}

export default config
