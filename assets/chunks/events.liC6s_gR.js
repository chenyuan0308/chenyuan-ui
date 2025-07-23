const n=`<template>
  <div class="demo-container">
    <button @click="visible = true" class="demo-button">打开弹窗</button>
    <CYDraggable 
      v-model="visible" 
      title="事件监听"
      @close="handleClose"
    >
      <div>监听关闭事件的弹窗</div>
    </CYDraggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)

const handleClose = () => {
  console.log('弹窗已关闭')
  alert('弹窗已关闭')
}
<\/script>

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
</style> `;export{n as default};
