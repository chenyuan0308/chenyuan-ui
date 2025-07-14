<template>
  <div class="test-container">
    <h2>CYEllipsis Tooltip 测试</h2>
    
    <!-- 测试长文本（应该显示 tooltip） -->
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <h3>长文本测试：</h3>
      <CYEllipsis 
        text="这是一段很长的文本，用来测试省略和 tooltip 功能是否正常工作，当文本被省略时应该显示 tooltip" 
        :show-tooltip="true"
      />
    </div>
    
    <!-- 测试短文本（不应该显示 tooltip） -->
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <h3>短文本测试：</h3>
      <CYEllipsis 
        text="短文本" 
        :show-tooltip="true"
      />
    </div>
    
    <!-- 测试多行省略 -->
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <h3>多行省略测试：</h3>
      <CYEllipsis 
        text="这是一段很长的文本，用来测试多行省略功能，当文本超过两行时应该显示省略号，并且鼠标悬停时应该显示完整的文本内容" 
        :lines="2"
        :show-tooltip="true"
      />
    </div>
    
    <!-- 测试禁用 tooltip -->
    <div style="width: 200px; border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
      <h3>禁用 Tooltip 测试：</h3>
      <CYEllipsis 
        text="这是一段很长的文本，但是禁用了 tooltip 功能" 
        :show-tooltip="false"
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
  font-family: Arial, sans-serif;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

h3 {
  color: #666;
  margin-bottom: 10px;
  font-size: 14px;
}
</style> 