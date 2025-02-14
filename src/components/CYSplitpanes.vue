<template>
  <Splitpanes
    class="default-theme"
    :horizontal="horizontal"
    :push-other-panes="pushOtherPanes"
    :dbl-click-splitter="dblClickSplitter"
    :first-splitter="firstSplitter"
    :rtl="rtl"
    @resize="handleResize"
    @resized="handleResized"
  >
    <slot></slot>
  </Splitpanes>
</template>

<script setup lang="ts">
import { Splitpanes } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'

interface Props {
  /** 是否水平分割（默认垂直分割） */
  horizontal?: boolean
  /** 拖动时是否推动其他面板 */
  pushOtherPanes?: boolean
  /** 双击分割线时是否折叠/展开面板 */
  dblClickSplitter?: boolean
  /** 是否显示第一个分割线 */
  firstSplitter?: boolean
  /** 是否从右到左布局 */
  rtl?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  horizontal: false,
  pushOtherPanes: true,
  dblClickSplitter: true,
  firstSplitter: false,
  rtl: false
})

// 定义事件
const emit = defineEmits<{
  /** 面板大小改变时触发 */
  (e: 'resize', sizes: number[]): void
  /** 面板大小改变完成时触发 */
  (e: 'resized', sizes: number[]): void
}>()

// 处理面板大小改变事件
const handleResize = (sizes: number[]) => {
  emit('resize', sizes)
}

// 处理面板大小改变完成事件
const handleResized = (sizes: number[]) => {
  emit('resized', sizes)
}
</script>

<style>
/* 使用 splitpanes 原生样式 */
</style>
