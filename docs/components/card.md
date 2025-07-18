---
prev: 
  text: 'PointCloud 点云'
  link: '/components/pointCloud'
next: 
  text: 'Button 按钮'
  link: '/components/button'
---

# Card 卡片

一个功能丰富的卡片组件，支持 3D 倾斜效果、水波动画、阴影和边框等特性。

<AnchorNav />

## 基础用法

基础的卡片用法，包含标题、内容和底部区域。

<preview component_name="card/basic">
  <template #default>
    <CardBasic />
  </template>
</preview>

## 3D 倾斜效果

通过 `enable3d` 和 `maxRotateAngle` 属性可以控制 3D 倾斜效果。

### 启用 3D 效果

<preview component_name="card/3d-enabled">
  <template #default>
    <Card3dEnabled />
  </template>
</preview>

### 自定义倾斜角度

<preview component_name="card/custom-angle">
  <template #default>
    <CardCustomAngle />
  </template>
</preview>

### 禁用 3D 效果

<preview component_name="card/3d-disabled">
  <template #default>
    <Card3dDisabled />
  </template>
</preview>

## 水波动画

点击卡片时会产生水波扩散效果，可以通过 `enableRipple` 属性控制。

### 启用水波效果

<preview component_name="card/ripple-enabled">
  <template #default>
    <CardRippleEnabled />
  </template>
</preview>

### 禁用水波效果

<preview component_name="card/ripple-disabled">
  <template #default>
    <CardRippleDisabled />
  </template>
</preview>

## 阴影和边框

通过 `shadow` 和 `bordered` 属性可以控制卡片的阴影和边框样式。

### 带阴影的卡片

<preview component_name="card/with-shadow">
  <template #default>
    <CardWithShadow />
  </template>
</preview>

### 无边框卡片

<preview component_name="card/no-border">
  <template #default>
    <CardNoBorder />
  </template>
</preview>

## 组合使用

可以同时启用多种效果，创建丰富的交互体验。

<preview component_name="card/combined">
  <template #default>
    <CardCombined />
  </template>
</preview>

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 卡片标题 | string | '' |
| shadow | 是否显示阴影 | boolean | false |
| bordered | 是否显示边框 | boolean | true |
| enable3d | 是否启用 3D 倾斜效果 | boolean | true |
| maxRotateAngle | 最大倾斜角度（度） | number | 1.5 |
| enableRipple | 是否启用水波效果 | boolean | true |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| - | 暂无事件 | - |

### Slots

| 插槽名 | 说明 | 作用域参数 |
| --- | --- | --- |
| default | 卡片的主要内容 | - |
| header | 卡片头部内容 | - |
| footer | 卡片底部内容 | - |

## 样式特性

### 3D 倾斜效果

- 鼠标悬停时卡片会根据鼠标位置产生 3D 倾斜效果
- 倾斜角度可以通过 `maxRotateAngle` 属性调整
- 使用 `perspective` 和 `transform` 实现真实的 3D 效果
- 鼠标离开时会有平滑的回弹动画

### 水波动画

- 点击卡片时会产生以点击点为中心的水波扩散效果
- 水波会自动扩散到卡片的四个角落
- 动画结束后水波元素会自动销毁
- 支持多次连续点击，每次都会产生独立的水波

### 视觉设计

- 多层立体阴影，营造悬浮感
- 高光渐变边框，增强立体效果
- 圆角设计，现代简洁
- 悬停时阴影加深，增强交互反馈

## 注意事项

1. 3D 效果使用了 CSS `transform` 属性，在部分老旧浏览器中可能不支持
2. 水波动画使用了 CSS `animation`，确保浏览器支持 `@keyframes`
3. 水波效果会自动计算点击点到四个角的最大距离，确保覆盖整个卡片
4. 组件会智能处理鼠标事件，只有在启用相应功能时才会响应
5. 所有动画都使用了 `cubic-bezier` 缓动函数，提供流畅的动画体验
6. 水波动画结束后会自动清理 DOM 元素，避免内存泄漏 