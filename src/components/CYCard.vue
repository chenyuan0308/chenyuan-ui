<template>
  <div
    class="cy-card"
    :class="{
      'cy-card--shadow': shadow,
      'cy-card--bordered': bordered,
    }"
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    @click="createRipple"
    :style="cardStyle"
  >
    <div v-if="title || $slots.header" class="cy-card__header">
      <slot name="header">{{ title }}</slot>
    </div>
    <div class="cy-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="cy-card__footer">
      <slot name="footer" />
    </div>
    <!-- 水波效果容器（调试用div） -->
    <div class="cy-card__ripple-container" ref="rippleContainerRef"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  // 是否启用3D倾斜效果
  enable3d: {
    type: Boolean,
    default: true,
  },
  // 最大倾斜角度（度）
  maxRotateAngle: {
    type: Number,
    default: 1.5,
  },
  // 是否启用水波效果
  enableRipple: {
    type: Boolean,
    default: true,
  },
});

const cardRef = ref<HTMLElement | null>(null);
const cardStyle = ref("");
const rippleContainerRef = ref<HTMLElement | null>(null);

function handleMouseMove(e: MouseEvent) {
  if (!props.enable3d) return;
  const card = cardRef.value;
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  // 计算相对中心的偏移，范围[-1, 1]
  const percentX = (x - centerX) / centerX;
  const percentY = (y - centerY) / centerY;
  // 计算旋转角度，使用props配置的最大角度
  const rotateY = percentX * props.maxRotateAngle;
  const rotateX = -percentY * props.maxRotateAngle;
  cardStyle.value = `transform: perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg); will-change: transform;`;
}

function handleMouseLeave() {
  cardStyle.value =
    "transform: perspective(600px) rotateX(0deg) rotateY(0deg); transition: transform 0.3s cubic-bezier(.23,1.02,.64,1);";
  setTimeout(() => {
    cardStyle.value = "";
  }, 300);
}

function createRipple(e: MouseEvent) {
  if (!props.enableRipple) return;
  const card = cardRef.value;
  const rippleContainer = rippleContainerRef.value;
  if (!card || !rippleContainer) return;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  // 计算点击点到四个角的最大距离，确保波纹能覆盖整个卡片
  const distTL = Math.hypot(x, y);
  const distTR = Math.hypot(rect.width - x, y);
  const distBL = Math.hypot(x, rect.height - y);
  const distBR = Math.hypot(rect.width - x, rect.height - y);
  const maxRadius = Math.max(distTL, distTR, distBL, distBR);
  const diameter = maxRadius * 2;
  const ripple = document.createElement("span");
  ripple.className = "cy-card__ripple";
  ripple.style.left = `${x - maxRadius}px`;
  ripple.style.top = `${y - maxRadius}px`;
  ripple.style.width = ripple.style.height = `${diameter}px`;
  rippleContainer.appendChild(ripple);
  // 动画结束后移除
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}
</script>

<style lang="scss" scoped>
.cy-card {
  background: #fff;
  border-radius: 12px;
  box-sizing: border-box;
  transition: box-shadow 0.2s, transform 0.3s cubic-bezier(0.23, 1.02, 0.64, 1);
  padding: 0;
  //   min-width: 200px;
  //   min-height: 100px;
  width: 100%;
  height: 100%;
  // 多层立体阴影
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08), 0 6px 24px 0 rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  &--shadow {
    box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.16),
      0 1.5px 6px 0 rgba(0, 0, 0, 0.1);
  }
  &--bordered {
    border: 1.5px solid #d0d0d0;
    // 高光渐变边框
    box-shadow: 0 0 0 1.5px #fff inset, 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    background: linear-gradient(180deg, #fff 90%, #f6f8fa 100%);
  }
  &:hover {
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.18), 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    border-color: #b0b0b0;
  }
  &__ripple-container {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    z-index: 9999;
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
.cy-card__ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(120, 120, 120, 0.8);
  transform: scale(0);
  animation: cy-card-ripple 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  pointer-events: none;
  z-index: 10000;
  opacity: 1;
}
@keyframes cy-card-ripple {
  0% {
    opacity: 0.8;
    transform: scale(0);
  }
  80% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}
</style>
