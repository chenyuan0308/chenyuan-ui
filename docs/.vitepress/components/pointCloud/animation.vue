<template>
  <div>
    <CYPointCloud
      :pointCloudList="points"
      :point_size="0.25"
      :enable_animation="true"
      :animation_speed="0.05"
      @point_click="handlePointClick"
    />
    <div v-if="selectedPoint" class="point-info">
      选中的点：x: {{ selectedPoint[0].toFixed(2) }}, y: {{ selectedPoint[1].toFixed(2) }}, z: {{ selectedPoint[2].toFixed(2) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 生成示例点云数据
const points = ref([
  [0, 0, 0, 0],
  [1, 0, 0, 1],
  [0, 1, 0, 2],
  [0, 0, 1, 3],
  [-1, 0, 0, 0],
  [0, -1, 0, 1],
  [0, 0, -1, 2],
  [1, 1, 1, 3],
  [-1, -1, -1, 0],
  [1, -1, 1, 1],
  [-1, 1, -1, 2],
  [1, 1, -1, 3],
])

const selectedPoint = ref(null)

// 处理点击事件
const handlePointClick = (point: number[], index: number) => {
  console.log('点击了点：', point, '索引：', index)
  selectedPoint.value = point
}
</script>

<style scoped>
.point-info {
  margin-top: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>
