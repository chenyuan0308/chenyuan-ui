# 安装使用

## 安装

使用包管理器安装 chenyuan-ui：

::: code-group
```bash [npm]
npm install chenyuan-ui
```

```bash [yarn]
yarn add chenyuan-ui
```

```bash [pnpm]
pnpm add chenyuan-ui
```
:::

## 引入样式

chenyuan-ui 依赖于 Element Plus 的样式。如果你全局引入组件，需要先引入样式文件：

```ts
// 入口文件中引入
// Element Plus 样式
import 'element-plus/dist/index.css'
// chenyuan-ui 组件样式
import 'chenyuan-ui/dist/style.css'
```

如果你使用按需引入，只需要引入相应组件的样式：

```ts
// 引入 Element Plus 按钮组件的样式
import 'element-plus/es/components/button/style/css'
// 引入 chenyuan-ui 的按钮组件样式
import 'chenyuan-ui/es/components/button/style/css'
```

## 全局注册

如果你想要全局注册所有组件，只需要在你的入口文件中添加以下代码：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import ChenYuanUI from 'chenyuan-ui'

const app = createApp(App)
app.use(ChenYuanUI)
app.mount('#app')
```

这样你就可以在任何组件中直接使用 chenyuan-ui 的组件了：

```vue
<template>
  <CYButton>按钮</CYButton>
  <CYSplitpanes>
    <CYPane>左侧面板</CYPane>
    <CYPane>右侧面板</CYPane>
  </CYSplitpanes>
</template>
```

## 按需引入

### 引入 chenyuan-ui 组件

如果你只想使用某些组件，可以直接从 chenyuan-ui 中导入这些组件：

```vue
<template>
  <CYButton>按钮</CYButton>
</template>

<script setup>
import { CYButton } from 'chenyuan-ui'
import 'chenyuan-ui/es/components/button/style/css'
</script>
```

或者在你的入口文件中只注册你需要的组件：

```ts
import { createApp } from 'vue'
import App from './App.vue'
import { CYButton, CYSplitpanes, CYPane } from 'chenyuan-ui'

// 引入需要的组件样式
import 'chenyuan-ui/es/components/button/style/css'
import 'chenyuan-ui/es/components/splitpanes/style/css'

const app = createApp(App)

app.component('CYButton', CYButton)
app.component('CYSplitpanes', CYSplitpanes)
app.component('CYPane', CYPane)

app.mount('#app')
```

### 使用 Element Plus 组件

chenyuan-ui 已经将 Element Plus 的组件导出，你可以直接从 chenyuan-ui 中引入 Element Plus 的组件：

```vue
<template>
  <!-- 使用 chenyuan-ui 的组件 -->
  <CYButton>按钮</CYButton>
  
  <!-- 使用 Element Plus 的组件 -->
  <ElButton type="primary">主要按钮</ElButton>
  <ElInput v-model="value" />
</template>

<script setup>
// 从 chenyuan-ui 中引入组件
import { CYButton, ElButton, ElInput } from 'chenyuan-ui'

// 引入相应的样式
import 'chenyuan-ui/es/components/button/style/css'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/input/style/css'

const value = ref('')
</script>
```

这样可以减小打包体积，只包含你实际使用的组件。
