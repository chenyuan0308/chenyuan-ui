<template>
  <button
    class="my-button"
    :class="[`my-button--${type}`, { 'is-disabled': disabled }]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event: MouseEvent) => {
      emit('click', event)
    }

    return {
      handleClick
    }
  }
})
</script>

<style scoped>
.my-button {
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
  cursor: pointer;
}

.my-button--primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}

.my-button.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}
</style> 