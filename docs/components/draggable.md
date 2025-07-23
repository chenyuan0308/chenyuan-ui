---
prev: 
  text: 'Ellipsis 文本省略'
  link: '/components/ellipsis'
next: 
  text: 'Splitpanes 分割面板'
  link: '/components/splitpanes'
---

# Draggable 可拖拽弹窗

一个可拖拽的弹窗组件，支持自定义位置、遮罩层、拖拽等功能。

## 基础用法

最基本的用法，弹窗会默认居中显示。

<preview component_name="draggable/basic">
  <template #default>
    <DraggableBasic />
  </template>
</preview>

## 自定义位置

通过 `x` 和 `y` 属性可以指定弹窗的初始位置。

<preview component_name="draggable/custom-position">
  <template #default>
    <DraggableCustomPosition />
  </template>
</preview>


## 自定义尺寸

可以设置弹窗的宽度和高度。

<preview component_name="draggable/custom-size">
  <template #default>
    <DraggableCustomSize />
  </template>
</preview>


## 无遮罩层

设置 `mask` 为 `false` 可以移除遮罩层。

<preview component_name="draggable/no-mask">
  <template #default>
    <DraggableNoMask />
  </template>
</preview>


## 点击遮罩关闭

设置 `closeOnClickMask` 为 `true` 可以点击遮罩层关闭弹窗。

<preview component_name="draggable/close-on-mask">
  <template #default>
    <DraggableCloseOnMask />
  </template>
</preview>


## 自定义头部

通过 `#header` 插槽可以自定义头部内容。

<preview component_name="draggable/custom-header">
  <template #default>
    <DraggableCustomHeader />
  </template>
</preview>


## 事件监听

组件支持 `close` 事件，可以在弹窗关闭时执行自定义逻辑。

<preview component_name="draggable/events">
  <template #default>
    <DraggableEvents />
  </template>
</preview>


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| `modelValue` | 是否显示弹窗 | `boolean` | `false` |
| `title` | 弹窗标题 | `string` | `''` |
| `width` | 弹窗宽度 | `number \| string` | `400` |
| `height` | 弹窗高度 | `number \| string` | `240` |
| `x` | 初始 X 坐标，不传则居中显示 | `number` | `null` |
| `y` | 初始 Y 坐标，不传则居中显示 | `number` | `null` |
| `mask` | 是否显示遮罩层 | `boolean` | `true` |
| `closeOnClickMask` | 点击遮罩层是否关闭弹窗 | `boolean` | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| `update:modelValue` | 弹窗显示状态改变时触发 | `(value: boolean)` |
| `close` | 弹窗关闭时触发 | `()` |

### Slots

| 插槽名 | 说明 | 作用域参数 |
|--------|------|------------|
| `default` | 弹窗主体内容 | `()` |
| `header` | 自定义头部内容 | `()` |

## 特性

- 🎯 **智能定位**：支持自定义位置或自动居中
- 🖱️ **拖拽功能**：通过头部区域拖拽移动弹窗
- 🎨 **自定义样式**：支持自定义尺寸、遮罩层等
- 📱 **响应式**：适配不同屏幕尺寸
- ♿ **无障碍**：支持键盘操作和屏幕阅读器 