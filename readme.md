# Chenyuan UI

一个基于 Vue 3 的组件库

## 发布新版本流程

### 1. 构建项目
```bash
pnpm build
```

### 2. 更新版本号
选择以下命令之一执行：
```bash
# 更新补丁版本，如 0.0.1 -> 0.0.2
npm version patch

# 更新次版本号，如 0.1.0 -> 0.2.0
npm version minor

# 更新主版本号，如 1.0.0 -> 2.0.0
npm version major
```

### 3. 发布到 npm
```bash
npm publish
```

## 使用说明

### 1. 安装
```bash
# 使用 npm
npm install chenyuan-ui

# 使用 pnpm
pnpm add chenyuan-ui
```

### 2. 全局引入
```typescript
// main.ts
import { createApp } from 'vue'
import ChenyuanUI from 'chenyuan-ui'
import 'chenyuan-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(ChenyuanUI)
app.mount('#app')
```

### 3. 按需引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { CYButton, CYIconText, CYPointCloud, CYEllipsis } from 'chenyuan-ui'

const app = createApp(App)
app.component('CYButton', CYButton)
app.component('CYIconText', CYIconText)
app.component('CYPointCloud', CYPointCloud)
app.component('CYEllipsis', CYEllipsis)
app.mount('#app')
```

注意：组件导出名称为 `CYButton`，使用时可以通过 `<CYButton>` 或 `<CYButton>` 标签使用。

## 注意事项
1. 确保在发布前所有代码更改都已提交到 git 仓库
2. 确保版本号未被使用过
3. 确保已登录到 npm 账号
4. 确保有发布权限

支持的图标：Edit, Check, Delete, Search, Setting, User, Home, Star, Heart, Like, Share, Download, Upload, Refresh, Close, Plus, Minus, ArrowLeft, ArrowRight, ArrowUp, ArrowDown

### CYEllipsis 文本省略组件

```vue
<template>
  <!-- 单行省略 -->
  <CYEllipsis text="这是一段很长的文本，会被省略显示" />
  
  <!-- 多行省略 -->
  <CYEllipsis 
    text="这是一段很长的文本，会被省略显示，支持多行省略" 
    :lines="2" 
  />
  
  <!-- 自定义宽度 -->
  <div style="width: 200px;">
    <CYEllipsis text="这是一段很长的文本，会被省略显示" />
  </div>
  
  <!-- 禁用工具提示 -->
  <CYEllipsis 
    text="这是一段很长的文本，会被省略显示" 
    :show-tooltip="false" 
  />
</template>
```

### CYPointCloud 点云组件