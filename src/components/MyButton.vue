<template>
  <el-tooltip
    v-if="!hasPermission"
    :content="permissionTip || '暂无权限'"
    placement="top">
    <el-button 
      v-bind="$attrs" 
      :disabled="isDisabled" 
      class="common-btn-style"
      :class="btnClass"
      :icon="icon"
      @click="handleClick"
      @keyup.enter="handleEnterKey"
      @keydown="handleKeyDown"
      tabindex="0">
      <slot name="icon">
        <div v-if="src">
          <el-image :src="src" />
        </div>
      </slot>
      <div v-if="label && !onlyIcon" class="label" :class="`${icon||src||$slots.icon ? 'ml-2' : ''}`">{{ label }}</div>
    </el-button>
  </el-tooltip>
  <el-button 
    v-else
    v-bind="$attrs" 
    :disabled="isDisabled" 
    class="common-btn-style"
    :class="btnClass"
    :icon="icon"
    @click="handleClick"
    @keyup.enter="handleEnterKey"
    @keydown="handleKeyDown"
    tabindex="0">
    <slot name="icon">
      <div v-if="src">
        <el-image :src="src" />
      </div>
    </slot>
    <div v-if="label && !onlyIcon" class="label" :class="`${icon||src||$slots.icon ? 'ml-2' : ''}`">{{ label }}</div>
  </el-button>
</template>

<script lang="ts">
export default {
  'name': 'Vue'
};
</script>
<script setup lang="ts">
import { onMounted, onUnmounted, watch, ref, computed } from 'vue'

const emit = defineEmits(['click'])

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
  },
  // 是否全局监听回车键
  globalEnter: {
    type: Boolean,
    default: false
  },
  // 是否有权限（true 可点击，false 禁用）
  permission: {
    type: Boolean,
    default: true
  },
  // 无权限时的提示文案
  permissionTip: {
    type: String,
    default: '暂无权限'
  },
  // 纯图标按钮模式，18x18 无边框无内边距
  onlyIcon: {
    type: Boolean,
    default: false
  }
})

// 权限判断
const hasPermission = computed(() => {
  return props.permission
})

// 综合禁用状态：原始 disabled 或无权限
const isDisabled = computed(() => {
  return props.disabled || !hasPermission.value
})

// 按钮 class
const btnClass = computed(() => ({
  [props.customerClass]: true,
  ablebtn: !isDisabled.value && !props.onlyIcon,
  'loading-animation': props.loading,
  loading: props.loading,
  'with-hover': props.hover,
  'only-icon': props.onlyIcon
}))

// 控制全局监听是否激活的内部状态
const isGlobalListenerActive = ref(false)

// 处理鼠标点击
const handleClick = (event: MouseEvent) => {
  if (isDisabled.value || props.loading) return
  console.log('按钮点击:', props.label)
  emit('click', event)
}

// 处理所有按键事件（用于调试）
const handleKeyDown = (event: KeyboardEvent) => {
  console.log('按键按下:', event.key, '按钮:', props.label)
  if (event.key === 'Enter') {
    if (isDisabled.value || props.loading) return
    console.log('按钮回车触发点击:', props.label)
    emit('click', event)
  }
}

// 处理回车键点击
const handleEnterKey = (event: KeyboardEvent) => {
  if (isDisabled.value || props.loading) return
  console.log('按钮回车触发点击(keyup):', props.label)
  emit('click', event)
}

// 全局回车键监听
const handleGlobalEnter = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !isDisabled.value && !props.loading) {
    console.log('全局回车键触发按钮点击:', props.label)
    emit('click', event)
  }
}

// 添加全局监听
const addGlobalListener = () => {
  if (!isGlobalListenerActive.value) {
    window.addEventListener('keydown', handleGlobalEnter)
    isGlobalListenerActive.value = true
    console.log('已启用全局回车监听:', props.label)
  }
}

// 移除全局监听
const removeGlobalListener = () => {
  if (isGlobalListenerActive.value) {
    window.removeEventListener('keydown', handleGlobalEnter)
    isGlobalListenerActive.value = false
    console.log('已移除全局回车监听:', props.label)
  }
}

// 在组件挂载时根据 globalEnter 决定是否添加监听
onMounted(() => {
  if (props.globalEnter) {
    addGlobalListener()
  }
})

// 监听 globalEnter 的变化，动态添加或移除监听
watch(() => props.globalEnter, (newValue: boolean) => {
  if (newValue) {
    addGlobalListener()
  } else {
    removeGlobalListener()
  }
})

// 在组件卸载时移除监听
onUnmounted(() => {
  removeGlobalListener()
})

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
  --cy-btn-height: 56px;
  --cy-btn-padding: 15px 20px;
  --cy-btn-font-size: 14px;
  --cy-btn-border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--cy-btn-height);
  padding: var(--cy-btn-padding);
  font-size: var(--cy-btn-font-size);
  border-radius: var(--cy-btn-border-radius);
  transition: all 0.3s ease;
  cursor: pointer;

  &.only-icon {
    height: 18px;
    padding: 0;
    border-radius: 0;
  }

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

.only-icon {
  &.el-button {
    width: 18px !important;
    height: 18px !important;
    min-width: 18px !important;
    min-height: 18px !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    background: transparent !important;
    box-shadow: none !important;
    outline: none !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    line-height: 1;
    vertical-align: middle;
    color: inherit;

    &:hover,
    &:focus {
      border: none !important;
      background: transparent !important;
      box-shadow: none !important;
    }

    :deep(.el-icon) {
      font-size: 18px;
    }
  }
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