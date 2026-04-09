<template>
  <div>
    <label style="display: flex; align-items: center; gap: 6px; margin-bottom: 12px;">
      <input type="checkbox" v-model="enableGlobalEnter" />
      开启全局回车监听（无需聚焦按钮，直接按回车即可触发）
    </label>
    <CYButton
      :globalEnter="enableGlobalEnter"
      :label="enableGlobalEnter ? '全局回车已启用（按回车试试）' : '全局回车已禁用'"
      hover="#e6f0ff"
      @click="handleClick"
    />
    <p v-if="clickCount" style="margin-top: 12px; color: #666;">
      已触发 {{ clickCount }} 次
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const enableGlobalEnter = ref(false)
const clickCount = ref(0)

const handleClick = () => {
  clickCount.value++
}
</script>
