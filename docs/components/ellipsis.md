---
prev: 
  text: 'Steps 步骤条'
  link: '/components/steps'
next: 
  text: 'Splitpanes 分割面板'
  link: '/components/splitpanes'
---

# Ellipsis 文本省略

用于文本省略显示的组件，支持单行和多行省略。

<AnchorNav />

## 基础用法

### 单行省略

当文本内容超出容器宽度时，会自动显示省略号。

<preview component_name="ellipsis/basic">
  <template #default>
    <EllipsisBasic />
  </template>
</preview>

### 多行省略

通过 `lines` 属性可以设置显示的行数。

<preview component_name="ellipsis/multiline">
  <template #default>
    <EllipsisMultiline />
  </template>
</preview>

### 自定义宽度

可以通过父容器的宽度来控制省略的触发。

<preview component_name="ellipsis/custom-width">
  <template #default>
    <EllipsisCustomWidth />
  </template>
</preview>

### 禁用工具提示

通过 `show-tooltip` 属性可以控制是否显示工具提示。当文本被省略时，会显示 Element Plus 风格的 tooltip。

<preview component_name="ellipsis/disable-tooltip">
  <template #default>
    <EllipsisDisableTooltip />
  </template>
</preview>

### 智能 Tooltip

组件会智能判断文本是否被省略，只有在文本被省略时才会显示 tooltip。

<preview component_name="ellipsis/smart-tooltip">
  <template #default>
    <EllipsisSmartTooltip />
  </template>
</preview>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 要显示的文本内容 | string | '' |
| lines | 显示行数 | number | 1 |
| showTooltip | 是否显示工具提示 | boolean | true |
| maxWidth | 最大宽度 | string \| number | '' |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| - | 暂无事件 | - |

### Slots

| 插槽名 | 说明 | 作用域参数 |
| --- | --- | --- |
| - | 暂无插槽 | - |

## 注意事项

1. 组件会自动检测文本是否需要省略
2. 多行省略使用了 `-webkit-line-clamp` 属性，在部分浏览器中可能不支持
3. 使用 Element Plus 的 `el-tooltip` 组件，样式与 Element Plus 保持一致
4. 只有在文本被省略时才会显示 tooltip，避免不必要的提示
5. 组件会响应文本内容的变化，自动重新计算是否需要省略
6. Tooltip 显示延迟为 200ms，避免频繁触发 