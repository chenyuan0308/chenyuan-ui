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

## 全局回车监听

通过 `globalEnter` 开启全局回车键监听，无需聚焦按钮，按下回车即可触发点击事件。

<preview component_name="button/global-enter">
  <template #default>
    <ButtonGlobalEnter />
  </template>
</preview>

## 图标按钮

带图标的按钮可以更好地表达按钮的含义。

<preview component_name="button/with-icon">
  <template #default>
      <ButtonWithIcon />
  </template>
</preview>

## 权限控制

通过 `permission` 传入布尔值控制按钮是否可点击。`false` 时按钮自动禁用，悬浮显示提示文案。可通过 `permissionTip` 自定义提示内容。

<preview component_name="button/permission">
  <template #default>
    <ButtonPermission />
  </template>
</preview>

## 图标插槽

通过 `#icon` 具名插槽可以自定义按钮的图标/图片内容，支持放入 `el-icon`、`<img>` 或任意自定义内容。未使用插槽时，`src` prop 仍然生效作为兜底。

<preview component_name="button/icon-slot">
  <template #default>
    <ButtonIconSlot />
  </template>
</preview>

## 自定义样式

通过 `customerClass` 传入自定义类名，配合 CSS 变量即可轻松修改按钮尺寸，无需与 `!important` 斗争。

<preview component_name="button/custom-style">
  <template #default>
    <ButtonCustomStyle />
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
| src           | 图片地址         | string  | ''         |
| globalEnter   | 是否全局监听回车键 | boolean | false    |
| permission    | 是否有权限，`false` 时按钮禁用 | boolean | true |
| permissionTip | 无权限时的提示文案 | string | '暂无权限' |
| onlyIcon      | 纯图标按钮模式，18x18 无边框无间距 | boolean | false |

### 插槽

| 插槽名  | 说明       |
| ------- | ---------- |
| default | 按钮的内容 |
| icon    | 自定义图标/图片内容，优先级高于 `src` prop |

### CSS 变量

通过 `customerClass` 配合以下 CSS 变量自定义按钮样式：

| 变量名                  | 说明       | 默认值      |
| ---------------------- | ---------- | ----------- |
| --cy-btn-height        | 按钮高度   | 56px        |
| --cy-btn-padding       | 按钮内边距 | 15px 20px   |
| --cy-btn-font-size     | 字体大小   | 14px        |
| --cy-btn-border-radius | 按钮圆角   | 4px         |

使用示例：

```vue
<CYButton label="小按钮" customerClass="small-btn" />

<style>
:deep(.small-btn) {
  --cy-btn-height: 36px;
  --cy-btn-padding: 6px 12px;
  --cy-btn-font-size: 12px;
  --cy-btn-border-radius: 8px;
}
</style>
```
