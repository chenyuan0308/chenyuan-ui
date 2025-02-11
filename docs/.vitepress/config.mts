import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Chenyuan UI',
  description: 'Vue 3 组件库',
  base: '/chenyuan-ui/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' },
    ],
    sidebar: {
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'input 输入框', link: '/components/input' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/chenyuan0308/chenyuan-ui' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Chenyuan'
    }
  }
})
