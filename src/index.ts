import type { App } from 'vue'
import 'element-plus/dist/index.css'
// 导入自己的组件
import CYButton from './components/MyButton.vue'
import CYInput from './components/MyInput.vue'
import CYPointCloud from './components/pointCloud.vue'
import CYSplitpanes from './components/CYSplitpanes.vue'
import CYPane from './components/CYPane.vue'
import CYSteps from './components/CYSteps.vue'

// 导出 Element Plus 组件
export * from 'element-plus'

// 导出自己的组件
export { CYButton, CYInput, CYPointCloud, CYSplitpanes, CYPane, CYSteps }

// 导出插件
export default {
  install: (app: App) => {
    // 注册自己的组件
    app.component('CYButton', CYButton)
    app.component('CYInput', CYInput)
    app.component('CYPointCloud', CYPointCloud)
    app.component('CYSplitpanes', CYSplitpanes)
    app.component('CYPane', CYPane)
    app.component('CYSteps', CYSteps)
  }
} 