import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Chenyuan UI',
  description: 'Vue 3 组件库',
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          children: [
            { text: '介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          children: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Input 输入框', link: '/components/input' }
          ]
        }
      ]
    }
  })
}) 