import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MyButton from '../../../src/components/MyButton.vue'
import MyPointCloud from '../../../src/components/pointCloud.vue'
import Preview from '../components/preview.vue'
import ButtonBasic from '../components/button/basic.vue'
import ButtonHover from '../components/button/hover.vue'
import ButtonDisabled from '../components/button/disabled.vue'
import ButtonWithIcon from '../components/button/with-icon.vue'
import ButtonLoading from '../components/button/loading.vue'
import AnchorNav from '../components/anchor-nav.vue'
import PointCloudBasic from '../components/pointCloud/basic.vue'
import PointCloudColor from '../components/pointCloud/differentColor.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('CYButton', MyButton)
    app.component('CYPointCloud', MyPointCloud)
    app.component('Preview', Preview)
    app.component('AnchorNav', AnchorNav)
    app.component('ButtonBasic', ButtonBasic)
    app.component('ButtonHover', ButtonHover)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('ButtonWithIcon', ButtonWithIcon)
    app.component('ButtonLoading', ButtonLoading)
    app.component('PointCloudBasic', PointCloudBasic)
    app.component('PointCloudColor', PointCloudColor)
  }
} satisfies Theme
