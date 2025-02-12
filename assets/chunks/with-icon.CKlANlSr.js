const n=`<template>
  <CYButton label="带图标按钮" :icon="Delete" />
  <div style="margin-bottom: 20px;"/>
  <CYButton label="自定义图标" :src="loop" customerClass="with-large-icon" />
</template>
<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
import loop from '../../../../src/assets/icon/loop.png'

<\/script>

<style lang="scss" scoped>
:deep() {
  img {
    width: 20px;
    height: 20px;
  }
}
</style>`;export{n as default};
