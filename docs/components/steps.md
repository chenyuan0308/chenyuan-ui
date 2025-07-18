---
prev: 
  text: 'Button 按钮'
  link: '/components/button'
next: 
  text: 'PointCloud 点云'
  link: '/components/pointCloud'
---

# Steps 步骤条

引导用户按照流程完成任务的导航条。

<AnchorNav />

## 基础用法

简单的步骤条。

<preview component_name="steps/StepsBasic">
  <template #default>
    <StepsBasic />
  </template>
</preview>

## 垂直步骤条

可以通过设置 `vertical` 属性来使用垂直步骤条。

<preview component_name="steps/StepsVertical">
  <template #default>
    <StepsVertical />
  </template>
</preview>

## API

### Props

| 属性名   | 说明           | 类型                                                | 默认值 |
| -------- | -------------- | --------------------------------------------------- | ------ |
| active   | 当前激活步骤   | number                                              | 0      |
| steps    | 步骤数组       | Array<{ title: string, description?: string }>      | []     |
| vertical | 是否为垂直方向 | boolean                                             | false  |
