<script setup lang="ts">
import { ref } from 'vue'
import { getSourceCode } from '../utils'

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
  source_code.value = await getSourceCode(props.component_name)
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

<style scoped>
.demo-block {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  margin: 20px 0;
  transition: all 0.2s;
}

.demo-block:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.demo-block__source {
  padding: 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #dcdfe6;
}

.demo-block__source :deep(button) {
  margin-right: 12px;
  margin-bottom: 12px;
}

.demo-block__meta {
  background-color: #fafafa;
}

.demo-block__actions {
  padding: 12px 24px;
  text-align: right;
  border-top: 1px solid #eaeefb;
}

.action-button {
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  font-size: 12px;
  color: #666;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  margin-left: 8px;
  transition: color 0.2s;
}

.action-button:hover {
  color: #409eff;
}

.demo-block__code {
  padding: 24px;
  border-top: 1px solid #eaeefb;
  background-color: #1e1e1e;
  overflow: auto;
}

.demo-block__code pre {
  margin: 0;
  padding: 0;
}

.demo-block__code code {
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  color: #abb2bf;
  display: block;
  white-space: pre-wrap;
}

.language-vue {
  padding: 1em;
}
</style>
