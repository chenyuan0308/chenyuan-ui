import { defineConfig } from 'vitepress'

export default defineConfig({
  // 启用平滑滚动
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 100
      }
    }
  },
  // 启用页面大纲
  outline: {
    level: [2, 3],
    label: '页面大纲'
  },
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
