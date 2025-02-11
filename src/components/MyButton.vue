<template>
  <el-button v-bind="$attrs" :disabled="disabled" class="common-btn-style"
    :class="{ [customerClass]: true, ablebtn: !disabled, loading: loading, 'with-hover': hover }">
    <div v-if="icon">
      <el-image :src="icon" />
    </div>
    <div v-if="label" class="label" :class="`${icon ? 'ml-2' : ''}`">{{ label }}</div>
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
  }
})

const { label, icon } = toRefs(props)

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
</style>