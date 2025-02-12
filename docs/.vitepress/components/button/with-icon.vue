<template>
  <cy-button label="带图标按钮" :icon="Delete" />
  <div style="margin-bottom: 20px;"/>
  <cy-button label="自定义图标" :icon="loop" customerClass="with-large-icon" />
</template>
<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import loop from '../../../../src/assets/icon/loop.svg'

</script>

<style lang="scss" scoped>
:deep() {
  img {
    width: 30px;
    height: 30px;
  }
}
</style>