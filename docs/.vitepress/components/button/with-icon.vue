<template>
  <cy-button label="带图标按钮11" :icon="Delete" />
  <el-button type="primary" :icon="Delete" />
  <cy-button label="自定义图标" icon="/path/to/custom-icon.png" customerClass="with-large-icon" />
</template>
<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
</script>