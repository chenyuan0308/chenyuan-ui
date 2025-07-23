<template>
  <div>
    <div
      v-if="mask && visible"
      class="cy-draggable-mask"
      @click="onMaskClick"
    ></div>
    <div
      v-show="visible"
      class="cy-draggable-dialog"
      :style="dialogStyle"
      ref="dialogRef"
    >
      <div class="cy-draggable-header" ref="headerRef">
        <slot name="header">
          <span class="cy-draggable-title">{{ title }}</span>
        </slot>
        <button class="cy-draggable-close" @click="close">×</button>
      </div>
      <div class="cy-draggable-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, useTemplateRef } from "vue";
import { useDraggable } from "@vueuse/core";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: "" },
  width: { type: [String, Number], default: 400 },
  height: { type: [String, Number], default: 240 },
  x: { type: Number, default: null },
  y: { type: Number, default: null },
  mask: { type: Boolean, default: true },
  closeOnClickMask: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue", "close"]);

const visible = ref(props.modelValue);
watch(
  () => props.modelValue,
  (v) => (visible.value = v)
);
watch(visible, (v) => emit("update:modelValue", v));

const dialogRef = useTemplateRef<HTMLElement | null>("dialogRef");
const headerRef = useTemplateRef<HTMLElement | null>("headerRef");

// 计算初始位置：如果传入了 x、y 则使用，否则居中显示
const getInitialPosition = () => {
  if (props.x !== null && props.y !== null) {
    return { x: props.x, y: props.y };
  }
  // 默认居中显示
  const width = typeof props.width === 'number' ? props.width : 400;
  const height = typeof props.height === 'number' ? props.height : 240;
  return {
    x: (window.innerWidth - width) / 2,
    y: (window.innerHeight - height) / 2,
  };
};

// 将拖拽绑定到头部，而不是整个弹窗
const { x, y, style } = useDraggable(headerRef, {
  initialValue: getInitialPosition(),
  preventDefault: true,
});

const dialogStyle = computed(() => ({
  width: typeof props.width === "number" ? props.width + "px" : props.width,
  height: typeof props.height === "number" ? props.height + "px" : props.height,
  top: y.value + "px",
  left: x.value + "px",
}));

function close() {
  visible.value = false;
  x.value = getInitialPosition().x;
  y.value = getInitialPosition().y;

  emit("close");
}
function onMaskClick() {
  if (props.closeOnClickMask) close();
}
</script>

<style lang="scss" scoped>
.cy-draggable-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 999;
}
.cy-draggable-dialog {
  position: fixed;
  z-index: 1000;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18), 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.2s;
  min-width: 200px;
  min-height: 100px;
  user-select: none; /* 防止拖拽时选中文本 */
}
.cy-draggable-header {
  cursor: move;
  background: #f6f8fa;
  padding: 12px 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
}
.cy-draggable-title {
  font-size: 16px;
}
.cy-draggable-close {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
}
.cy-draggable-close:hover {
  color: #f56c6c;
}
.cy-draggable-body {
  padding: 20px 16px;
  user-select: text; /* 允许在主体部分选中文本 */
}
</style>
