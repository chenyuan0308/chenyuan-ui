---
prev: 
  text: 'Card 卡片'
  link: '/components/card'
next: 
  text: 'PointCloud 点云'
  link: '/components/pointCloud'
---

# Splitpanes 分割面板

可拖动的分割面板容器，用于展示可调整大小的分割区域。

<AnchorNav />

## 基础用法

使用 `CYSplitpanes` 和 `CYPane` 组件来创建分割面板。默认为垂直分割。

<preview component_name="splitpanes/basic">
  <template #default>
    <SplitpanesBasic />
  </template>
</preview>

## 水平分割

设置 `horizontal` 属性为 `true` 可以创建水平分割的面板。

<preview component_name="splitpanes/horizontal">
  <template #default>
    <SplitpanesHorizontal />
  </template>
</preview>

## 嵌套使用

可以在面板内部嵌套其他分割面板，创建复杂的布局。

<preview component_name="splitpanes/nested">
  <template #default>
    <SplitpanesNested />
  </template>
</preview>

## 禁用推挤效果

设置 `push-other-panes` 为 `false` 可以禁用拖动时推挤其他面板的效果。

<preview component_name="splitpanes/no-push">
  <template #default>
    <SplitpanesNoPush />
  </template>
</preview>

## API

### CYSplitpanes 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| horizontal | 是否水平分割（默认垂直分割） | boolean | false |
| push-other-panes | 拖动时是否推动其他面板 | boolean | true |
| dbl-click-splitter | 双击分割线时是否折叠/展开面板 | boolean | true |
| first-splitter | 是否显示第一个分割线 | boolean | false |
| rtl | 是否从右到左布局 | boolean | false |

### CYSplitpanes 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| resize | 面板大小改变时触发 | (sizes: number[]) 所有面板的大小比例数组 |
| resized | 面板大小改变完成时触发 | (sizes: number[]) 所有面板的大小比例数组 |

### CYPane 属性

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| size | 面板的初始大小（百分比） | number | - |
| min-size | 面板的最小大小（百分比） | number | 0 |
| max-size | 面板的最大大小（百分比） | number | 100 |

### 插槽

| 插槽名 | 说明 |
|--------|------|
| default | MySplitpanes 的默认插槽，用于放置 Pane 组件 |
