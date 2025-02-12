<template>
  <el-button v-bind="$attrs" :disabled="disabled" class="common-btn-style"
    :class="{ [customerClass]: true, ablebtn: !disabled, ['loading-animation']: loading, loading: loading, 'with-hover': hover }"
    :icon="icon">
    <div v-if="src">
      <el-image :src="src" />
    </div>
    <div v-if="label" class="label" :class="`${icon||src ? 'ml-2' : ''}`">{{ label }}</div>
  </el-button>
</template>

<script lang="ts">
export default {
  'name': 'Vue'
};
</script>
<script setup lang="ts">
import { defineProps, toRefs, computed } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: '默认按钮'
  },
  icon: {
    type: String,
    default: ''
  },
  customerClass: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  hover: {
    type: String,
    default: ''
  },
  src:{
    type: String,
    default: ''
  }
})

const { label, icon, src } = toRefs(props)

// // 判断是否为本地图片
// const isLocalImage = computed(() => {
//   if (!icon.value) return false
//   // 如果是字符串且包含文件后缀名，则认为是本地图片
//   if (typeof icon.value === 'string' && /\.(svg|png|jpg|jpeg|gif)$/i.test(icon.value)) {
//     return true
//   }
//   return false
// })

</script>

<style scoped lang='scss'>
.common-btn-style {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 15px 20px;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  // 禁用默认的 hover 效果
  &:not(.with-hover) {
    &:hover {
      background-color: transparent !important;
      border-color: inherit !important;
      color: inherit !important;
      box-shadow: none !important;
    }
  }

  .label {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 200px;
  }

  &.loading {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }
}

.ablebtn {
  border: 1px solid #0E478F;

  &.with-hover:not(.loading):hover {
    background: v-bind('props.hover');
    color: #0E478F !important;
  }
}

.ml-2 {
  margin-left: 8px;
}

.el-button {
  margin: 0;

  // 设置 hover 状态的样式变量
  --el-button-hover-text-color: currentColor;
  --el-button-hover-border-color: currentColor;
  --el-button-hover-bg-color: transparent;

  // 设置禁用状态的样式变量
  --el-button-disabled-text-color: #c0c4cc;
  --el-button-disabled-bg-color: #fff;
  --el-button-disabled-border-color: #ebeef5;

  &:not(.with-hover) {

    &:hover,
    &:focus {
      color: var(--el-button-hover-text-color) !important;
      border-color: var(--el-button-hover-border-color) !important;
      background-color: var(--el-button-hover-bg-color) !important;
    }
  }

  // 禁用状态的样式
  &.is-disabled {

    &:hover,
    &:focus {
      color: var(--el-button-disabled-text-color) !important;
      border-color: var(--el-button-disabled-border-color) !important;
      background-color: var(--el-button-disabled-bg-color) !important;
      cursor: not-allowed;
    }
  }
}

.loading-animation {
  background: linear-gradient(90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 123, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%);
  background-size: 200% 100%;
  animation: loading 1.2s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>