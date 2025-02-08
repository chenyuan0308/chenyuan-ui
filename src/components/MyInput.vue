<template>
  <div class="my-input">
    <input
      class="my-input__inner"
      :class="{ 'is-disabled': disabled }"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <span 
      v-if="clearable && modelValue" 
      class="my-input__clear"
      @click="handleClear"
    >
      ×
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MyInput',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'focus', 'blur', 'clear'],
  setup(props, { emit }) {
    const handleInput = (event: Event) => {
      const value = (event.target as HTMLInputElement).value
      emit('update:modelValue', value)
    }

    const handleFocus = (event: FocusEvent) => {
      emit('focus', event)
    }

    const handleBlur = (event: FocusEvent) => {
      emit('blur', event)
    }

    const handleClear = () => {
      emit('update:modelValue', '')
      emit('clear')
    }

    return {
      handleInput,
      handleFocus,
      handleBlur,
      handleClear
    }
  }
})
</script>

<style scoped>
.my-input {
  position: relative;
  display: inline-block;
  width: 100%;
}

.my-input__inner {
  width: 100%;
  height: 32px;
  line-height: 32px;
  padding: 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color 0.2s;
  outline: none;
  box-sizing: border-box;
}

.my-input__inner:focus {
  border-color: #409eff;
}

.my-input__inner.is-disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
}

.my-input__clear {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  color: #c0c4cc;
  cursor: pointer;
  font-size: 16px;
}

.my-input__clear:hover {
  color: #909399;
}
</style> 