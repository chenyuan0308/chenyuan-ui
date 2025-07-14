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

注意：组件导出名称为 `CYButton`，使用时可以通过 `<CYButton>` 标签使用。
