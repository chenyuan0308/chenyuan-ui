---
title: PointCloud 点云
---

# PointCloud 点云

三维点云可视化组件，基于 Three.js 实现。

<AnchorNav />

## 基础用法

基础的点云显示功能。

<preview component_name="pointCloud/basic" :set_show_code="false">
  <template #default>
    <PointCloudBasic />
  </template>
</preview>

## 自定义点云颜色

基础的点云显示功能。

<preview component_name="pointCloud/differentColor" :set_show_code="false">
  <template #default>
    <PointCloudColor />
  </template>
</preview>

## 属性

| 属性名                    | 说明             | 类型    | 默认值 |
| ------------------------- | ---------------- | ------- | ------ |
| pointCloudList            | 点云数据列表     | Array   | []     |
| colorList | 颜色列表 | Array | ['#537983','#89caed','#d6d7db','#1463c3']  |

## 事件

组件会自动监听窗口大小变化和容器尺寸变化，并相应地调整渲染视图。

## 示例

### 基础点云显示

```vue
<template>
  <CYPointCloud :pointCloudList="points" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { CYPointCloud } from "chenyuan-ui";

const points = ref([
  { x: 0, y: 0, z: 0, color: 0 },
  { x: 1, y: 1, z: 1, color: 0 },
  // ... 更多点云数据
]);
</script>
```
## 样式变量

| 名称 （数组元素第四位）     | 说明           | 默认值   |
| ----------------------- | -------------- | -------- |
| default                 | 颜色            | 0xffffff  |
| 0                       | 颜色            | #537983  |
| 1                       | 颜色            | #89caed  |
| 2                       | 颜色            | #d6d7db  |
| 3                       | 颜色            | #1463c3  |


## 注意事项

1. 确保容器元素具有明确的宽度和高度
2. 点云数据应包含 x、y、z 坐标信息,color是点的颜色可以传入配置色，内置默认颜色
3. 组件会自动处理场景的清理和资源释放
4. 支持鼠标交互：旋转、缩放、平移等操作
