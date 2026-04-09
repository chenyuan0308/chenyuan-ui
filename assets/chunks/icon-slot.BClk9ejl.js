const n=`<template>
  <div class="button-list">
    <!-- 使用 #icon 插槽放 el-icon -->
    <CYButton label="搜索" hover="#e6f0ff">
      <template #icon>
        <el-icon><Search /></el-icon>
      </template>
    </CYButton>

    <!-- 使用 #icon 插槽放自定义图片 -->
    <CYButton label="带图片按钮" hover="#e6f0ff">
      <template #icon>
        <img src="https://element-plus.org/images/element-plus-logo-small.svg" style="width: 20px; height: 20px;" />
      </template>
    </CYButton>

    <!-- 兼容旧的 src 方式 -->
    <CYButton label="src 方式（兼容）" :src="loop" hover="#e6f0ff" />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import loop from '../../../../src/assets/icon/loop.png'
<\/script>

<style lang="scss" scoped>
.button-list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

:deep() {
  img {
    width: 20px;
    height: 20px;
  }
}
</style>
`;export{n as default};
