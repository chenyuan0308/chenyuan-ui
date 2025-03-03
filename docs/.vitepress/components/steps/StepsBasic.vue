<script setup lang="ts">
import { ref } from 'vue'

const active = ref(1)
const steps = [
  {
    title: '步骤1',
    description: '这是第一步的描述'
  },
  {
    title: '步骤2',
    description: '这是第二步的描述'
  },
  {
    title: '步骤3',
    description: '这是第三步的描述'
  }
]
</script>

<template>
  <CYSteps :activeStep="active" :stepList="steps" />
  <div style="margin-top: 20px">
    <el-button @click="active--" :disabled="active <= 0">上一步</el-button>
    <el-button @click="active++" :disabled="active >= steps.length">下一步</el-button>
  </div>
</template>
