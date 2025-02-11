<script setup lang="ts">
import { ref } from 'vue'

// 控制代码展示状态
const show_code = ref(true)

// 获取组件名称
const props = defineProps<{
  component_name: string
}>()

// 源代码
const source_code = ref('')

// 加载源代码
const load_source_code = async () => {
  try {
    const module = await import(`./button-demo.vue?raw`)
    source_code.value = module.default
  } catch (err) {
    console.error('加载组件源代码失败：', err)
    source_code.value = ''
  }
}

// 初始化时加载源代码
load_source_code()

// 处理复制代码
const handle_copy = async () => {
  try {
    await navigator.clipboard.writeText(source_code.value)
    alert('代码已复制到剪贴板')
  } catch (err) {
    console.error('复制失败：', err)
  }
}

// 切换代码显示状态
const handle_code_toggle = () => {
  show_code.value = !show_code.value
}
</script>

<template>
  <div class="demo-block">
    <div class="demo-block__source">
      <slot></slot>
    </div>
    <div class="demo-block__meta">
      <div class="demo-block__actions">
        <button class="action-button" @click="handle_copy" title="复制代码">
          <svg viewBox="0 0 1024 1024" width="14" height="14">
            <path fill="currentColor" d="M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"></path>
            <path fill="currentColor" d="M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"></path>
          </svg>
        </button>
        <button class="action-button" @click="handle_code_toggle">
          {{ show_code ? '隐藏代码' : '显示代码' }}
        </button>
      </div>
      <div v-show="show_code" class="demo-block__code">
        <div class="language-vue">
          <pre><code>{{ source_code }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
