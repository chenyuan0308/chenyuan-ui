import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Chenyuan UI',
  description: 'Vue 3 component library',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/components/': [
        {
          text: '组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' }
          ]
        }
      ]
    },
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 调整布局宽度
    siteTitle: 'Chenyuan UI',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Chenyuan'
    }
  },
  // 调整内容宽度
  layout: 'home',
  vite: {
    // 确保可以正确解析 Element Plus
    ssr: {
      noExternal: ['element-plus']
    }
  }
})
