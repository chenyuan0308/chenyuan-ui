# MyButton 按钮

常用的操作按钮组件。

## 基础用法

基础的按钮用法。

```vue
<template>
  <MyButton>默认按钮</MyButton>
  <MyButton type="primary">主要按钮</MyButton>
</template>
```

## 禁用状态

按钮不可用状态。

```vue
<template>
  <MyButton disabled>禁用按钮</MyButton>
  <MyButton type="primary" disabled>禁用主要按钮</MyButton>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| type | 按钮类型 | string | default / primary | default |
| disabled | 是否禁用 | boolean | - | false |

### 事件

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮时触发 | (event: MouseEvent) |

### 插槽

| 插槽名 | 说明 |
|------|------|
| default | 按钮的内容 |

## 样式变量

| 名称 | 说明 | 默认值 |
|------|------|------|
| --button-padding | 按钮内边距 | 8px 16px |
| --button-border-radius | 按钮圆角 | 4px |
| --button-border-color | 默认边框颜色 | #dcdfe6 |
| --button-bg-color | 默认背景颜色 | #fff |
| --button-primary-bg | 主要按钮背景色 | #409eff |
| --button-primary-border | 主要按钮边框色 | #409eff |
| --button-primary-color | 主要按钮文字色 | #fff |