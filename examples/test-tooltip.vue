<template>
  <div class="test-container">
    <h2>Tooltip 测试</h2>
    
    <!-- 测试 Element Plus 的 tooltip -->
    <el-tooltip content="这是一个 Element Plus tooltip" placement="top">
      <el-button>悬停我</el-button>
    </el-tooltip>
    
    <br><br>
    
    <!-- 测试我们的 CYEllipsis 组件 -->
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px;">
      <CYEllipsis 
        text="这是一段很长的文本，用来测试省略和 tooltip 功能是否正常工作" 
        :show-tooltip="true"
      />
    </div>
    
    <br>
    
    <!-- 测试短文本（不应该显示 tooltip） -->
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px;">
      <CYEllipsis 
        text="短文本" 
        :show-tooltip="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CYEllipsis } from '../src/index'
</script>

<style scoped>
.test-container {
  padding: 20px;
}
</style> 