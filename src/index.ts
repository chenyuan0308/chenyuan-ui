import type { App } from 'vue'
import CYButton from './components/MyButton.vue'
import CYInput from './components/MyInput.vue'
// 在这里导入更多组件

// 导出单个组件
export { CYButton, CYInput }

// 导出插件
export default {
  install: (app: App) => {
    app.component('cy-button', CYButton)
    app.component('cy-input', CYInput)
    // 在这里注册更多组件
  }
} 