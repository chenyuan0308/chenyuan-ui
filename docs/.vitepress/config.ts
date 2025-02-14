import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Chenyuan UI',
  description: 'Vue 3 component library',
  base: '/chenyuan-ui/',
  themeConfig: {

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/components/pointCloud' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/quick-start' },
            { text: '安装使用', link: '/guide/installation' },
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            {
              text:'**3D组件**',
              style: { fontSize: '1.2em' },
              items: [
                { text: 'PointCloud 点云', link: '/components/pointCloud' }
              ]
            }
            ,
            {
              text:'**普通组件**',
              items: [
                { text: 'Button 按钮', link: '/components/button' },
              ]
            },
            {
              text:'**布局组件**',
              items: [
                { text: 'Splitpanes 分割面板', link: '/components/splitpanes' },
              ]
            }
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
