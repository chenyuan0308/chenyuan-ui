<template>
  <div class="demo-container">
    <button @click="visible = true" class="demo-button">打开弹窗</button>
    <CYDraggable 
      v-model="visible" 
      title="点击遮罩关闭"
      :closeOnClickMask="true"
    >
      <div>点击遮罩可以关闭的弹窗</div>
    </CYDraggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>

<style scoped>
.demo-container {
  padding: 20px;
}

.demo-button {
  padding: 8px 16px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.demo-button:hover {
  background: #337ecc;
}
</style> 