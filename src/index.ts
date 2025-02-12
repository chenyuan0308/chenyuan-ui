import type { App } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import CYButton from './components/MyButton.vue'
import CYInput from './components/MyInput.vue'
import CYPointCloud from './components/pointCloud.vue'
// 在这里导入更多组件

// 导出单个组件
export { CYButton, CYInput, CYPointCloud }

// 导出插件
export default {
  install: (app: App) => {
    // 注册 Element Plus
    app.use(ElementPlus)
    
    // 注册自己的组件
    app.component('CYButton', CYButton)
    app.component('CYInput', CYInput)
    app.component('CYPointCloud', CYPointCloud)
    // 在这里注册更多组件
  }
} 