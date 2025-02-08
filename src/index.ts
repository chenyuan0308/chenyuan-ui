import type { App } from 'vue'
import MyButton from './components/MyButton.vue'
import MyInput from './components/MyInput.vue'
// 在这里导入更多组件

// 导出单个组件
export { MyButton, MyInput }

// 导出插件
export default {
  install: (app: App) => {
    app.component('MyButton', MyButton)
    app.component('MyInput', MyInput)
    // 在这里注册更多组件
  }
} 