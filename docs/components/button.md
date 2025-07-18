---
prev: 
  text: 'Card 卡片'
  link: '/components/card'
next: 
  text: 'Steps 步骤条'
  link: '/components/steps'
---

# Button 按钮

常用的操作按钮组件。

<AnchorNav />

## 加载状态

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<preview component_name="button/loading">
  <template #default>
    <ButtonLoading />
  </template>
</preview>

## 基础用法

基础的按钮用法。默认情况下，按钮没有 hover 效果。

<preview component_name="button/basic">
  <template #default>
    <ButtonBasic />
  </template>
</preview>

## Hover 效果

通过设置 `hover` 属性，可以为按钮添加 hover 效果。支持任何有效的 CSS 颜色值或渐变。

<preview component_name="button/hover">
  <template #default>
    <ButtonHover />
  </template>
</preview>

## 禁用状态

按钮不可用状态。

<preview component_name="button/disabled">
  <template #default>
  <ButtonDisabled />
  </template>
</preview>

## 图标按钮

带图标的按钮可以更好地表达按钮的含义。

<preview component_name="button/with-icon">
  <template #default>
      <ButtonWithIcon />
  </template>
</preview>

## API

### 属性

| 参数          | 说明             | 类型    | 默认值     |
| ------------- | ---------------- | ------- | ---------- |
| label         | 按钮文字         | string  | '默认按钮' |
| icon          | 图标路径         | string  | ''         |
| customerClass | 自定义样式类名   | string  | ''         |
| disabled      | 是否禁用         | boolean | false      |
| loading       | 是否加载中       | boolean | false      |
| hover         | hover 时的背景色 | string  | ''         |

### 插槽

组件使用 Element Plus 的 `el-button` 作为基础，因此支持 Element Plus 按钮组件的所有属性。

### CSS 变量

组件提供了以下 CSS 变量，可以用来自定义样式：

```css
.common-btn-style {
  --button-height: 56px;
  --button-padding: 15px 20px;
  --button-font-size: 14px;
}
```

### 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 按钮的内容 |

## 样式变量

| 名称                    | 说明           | 默认值   |
| ----------------------- | -------------- | -------- |
| --button-padding        | 按钮内边距     | 8px 16px |
| --button-border-radius  | 按钮圆角       | 4px      |
| --button-border-color   | 默认边框颜色   | #dcdfe6  |
| --button-bg-color       | 默认背景颜色   | #fff     |
| --button-primary-bg     | 主要按钮背景色 | #409eff  |
| --button-primary-border | 主要按钮边框色 | #409eff  |
| --button-primary-color  | 主要按钮文字色 | #fff     |
