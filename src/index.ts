import type { App } from 'vue'
// 移除全局样式导入，让用户自己决定是否导入
// import 'element-plus/dist/index.css'

// 导入自己的组件
import CYButton from './components/MyButton.vue'
import CYInput from './components/MyInput.vue'
import CYPointCloud from './components/pointCloud.vue'
import CYSplitpanes from './components/CYSplitpanes.vue'
import CYPane from './components/CYPane.vue'
import CYSteps from './components/CYSteps.vue'
import CYIconText from './components/CYIconText.vue'
import CYEllipsis from './components/CYEllipsis.vue'

// 移除全局导出，改为按需导出
// export * from 'element-plus'

// 导出自己的组件
export { CYButton, CYInput, CYPointCloud, CYSplitpanes, CYPane, CYSteps, CYIconText, CYEllipsis }

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
    app.component('CYIconText', CYIconText)
    app.component('CYEllipsis', CYEllipsis)
  }
} 