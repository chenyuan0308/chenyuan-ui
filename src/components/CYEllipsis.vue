<template>
  <el-tooltip
    :content="text"
    :disabled="!showTooltip || !isEllipsis"
    placement="top"
    :show-after="200"
  >
    <div ref="ellipsisRef" class="cy-ellipsis" :style="maxWidth ? { maxWidth: typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth } : {}">
      <span
        ref="textRef"
        class="cy-ellipsis__text"
        :style="{
          '-webkit-line-clamp': lines,
          display: lines > 1 ? '-webkit-box' : 'block',
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': lines > 1 ? 'normal' : 'nowrap',
        }"
      >
        {{ text }}
      </span>
    </div>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  lines: {
    type: Number,
    default: 1,
  },
  showTooltip: {
    type: Boolean,
    default: true,
  },
  maxWidth: {
    type: [String, Number],
    default: "",
  },
});

const ellipsisRef = ref<HTMLElement>();
const textRef = ref<HTMLElement>();
const isEllipsis = ref(false);

// 检查是否需要省略
const checkEllipsis = () => {
  if (!textRef.value || !ellipsisRef.value) return false;

  const textElement = textRef.value;
  const container = ellipsisRef.value;

  // 创建一个临时元素来测量文本的真实宽度
  const tempElement = document.createElement('span');
  tempElement.style.cssText = `
    position: absolute;
    visibility: hidden;
    white-space: ${props.lines > 1 ? 'normal' : 'nowrap'};
    word-break: break-all;
    word-wrap: break-word;
    font-family: ${getComputedStyle(textElement).fontFamily};
    font-size: ${getComputedStyle(textElement).fontSize};
    font-weight: ${getComputedStyle(textElement).fontWeight};
    line-height: ${getComputedStyle(textElement).lineHeight};
  `;
  tempElement.textContent = props.text;
  
  document.body.appendChild(tempElement);
  
  const textWidth = tempElement.offsetWidth;
  const containerWidth = container.clientWidth;
  
  document.body.removeChild(tempElement);

  // 如果文本宽度超过容器宽度，显示省略号
  const needEllipsis = textWidth > containerWidth;
  isEllipsis.value = needEllipsis;
  
  return needEllipsis;
};

onMounted(() => {
  nextTick(() => {
    checkEllipsis();
  });
});

watch(
  () => props.text,
  () => {
    nextTick(() => {
      checkEllipsis();
    });
  }
);

// 监听容器大小变化
watch(
  () => props.lines,
  () => {
    nextTick(() => {
      checkEllipsis();
    });
  }
);

// 监听 maxWidth 变化
watch(
  () => props.maxWidth,
  () => {
    nextTick(() => {
      checkEllipsis();
    });
  }
);
</script>

<style lang="scss" scoped>
.cy-ellipsis {
  width: 100%;
  overflow: hidden;

  &__text {
    word-break: break-all;
    word-wrap: break-word;
  }

  // 单行省略
  &__text:not([style*="-webkit-box"]) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // 多行省略
  &__text{
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
}
</style>
