<template>
  <div class="cy-icon-text">
    <span v-if="iconPosition === 'left'">图标{{ elIcon }}</span>
    <span>{{ text }}</span>
    <span v-if="iconPosition === 'right'">图标{{ elIcon }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  elIcon: String,
  text: String,
  iconPosition: {
    type: String,
    default: 'right',
    validator: (value: string) => ['left', 'right'].includes(value)
  },
})
</script>

<style lang="scss" scoped>
.cy-icon-text {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
