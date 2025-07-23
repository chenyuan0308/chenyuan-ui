const n=`<template>
  <div class="demo-container">
    <button @click="visible = true" class="demo-button">打开弹窗</button>
    <CYDraggable 
      v-model="visible" 
      title="自定义位置弹窗"
      :x="100"
      :y="100"
    >
      <div>自定义位置的弹窗内容</div>
    </CYDraggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
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
