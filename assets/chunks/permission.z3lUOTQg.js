const n=`<template>
  <div>
    <div class="button-list">
      <CYButton
        label="有权限"
        :permission="true"
        hover="#e6f0ff"
      >
        <template #icon>
          <el-icon><Plus /></el-icon>
        </template>
      </CYButton>

      <CYButton
        label="无权限"
        :permission="false"
        permissionTip="你没有该操作权限"
      >
        <template #icon>
          <el-icon><Delete /></el-icon>
        </template>
      </CYButton>

      <CYButton
        label="动态权限"
        :permission="hasPerm"
        hover="#e6f0ff"
      >
        <template #icon>
          <el-icon><Setting /></el-icon>
        </template>
      </CYButton>
    </div>
    <label style="display: flex; align-items: center; gap: 6px; margin-top: 12px;">
      <input type="checkbox" v-model="hasPerm" />
      切换"动态权限"按钮的权限状态
    </label>
    <div style="display: flex; align-items: center; gap: 12px; margin-top: 16px;">
      <span style="color: #666; font-size: 14px;">纯图标 + 权限控制：</span>
      <CYButton :onlyIcon="true" :permission="true">
        <template #icon>
          <el-icon><Edit /></el-icon>
        </template>
      </CYButton>
      <CYButton :onlyIcon="true" :permission="false" permissionTip="无删除权限">
        <template #icon>
          <el-icon><Delete /></el-icon>
        </template>
      </CYButton>
      <CYButton :onlyIcon="true" :permission="hasPerm">
        <template #icon>
          <el-icon><Setting /></el-icon>
        </template>
      </CYButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus, Delete, Setting, Edit } from '@element-plus/icons-vue'

const hasPerm = ref(false)
<\/script>

<style lang="scss" scoped>
.button-list {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
`;export{n as default};
