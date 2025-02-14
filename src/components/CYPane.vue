<template>
  <Pane :size="size" :min-size="minSize" :max-size="maxSize">
    <slot></slot>
  </Pane>
</template>

<script setup lang="ts">
import { Pane } from 'splitpanes'

interface Props {
  /** 面板的初始大小（百分比） */
  size?: number
  /** 面板的最小大小（百分比） */
  minSize?: number
  /** 面板的最大大小（百分比） */
  maxSize?: number
}

withDefaults(defineProps<Props>(), {
  size: undefined,
  minSize: 0,
  maxSize: 100
})
</script>
