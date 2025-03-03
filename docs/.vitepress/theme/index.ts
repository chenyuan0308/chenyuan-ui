import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MyButton from '../../../src/components/MyButton.vue'
import MyPointCloud from '../../../src/components/pointCloud.vue'
import CYSplitpanes from '../../../src/components/CYSplitpanes.vue'
import CYPane from '../../../src/components/CYPane.vue'
import CYSteps from '../../../src/components/CYSteps.vue'
import StepsBasic from '../components/steps/StepsBasic.vue'
import StepsVertical from '../components/steps/StepsVertical.vue'

import Preview from '../components/preview.vue'
import ButtonBasic from '../components/button/basic.vue'
import ButtonHover from '../components/button/hover.vue'
import ButtonDisabled from '../components/button/disabled.vue'
import ButtonWithIcon from '../components/button/with-icon.vue'
import ButtonLoading from '../components/button/loading.vue'
import AnchorNav from '../components/anchor-nav.vue'
import PointCloudBasic from '../components/pointCloud/basic.vue'
import PointCloudColor from '../components/pointCloud/differentColor.vue'
import PointCloudAnimation from '../components/pointCloud/animation.vue'

// Splitpanes demos
import SplitpanesBasic from '../components/splitpanes/basic.vue'
import SplitpanesHorizontal from '../components/splitpanes/horizontal.vue'
import SplitpanesNested from '../components/splitpanes/nested.vue'
import SplitpanesNoPush from '../components/splitpanes/no-push.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('CYButton', MyButton)
    app.component('CYPointCloud', MyPointCloud)
    app.component('CYSplitpanes', CYSplitpanes)

    app.component('CYPane', CYPane)
    app.component('Preview', Preview)
    app.component('AnchorNav', AnchorNav)
    app.component('ButtonBasic', ButtonBasic)
    app.component('ButtonHover', ButtonHover)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('ButtonWithIcon', ButtonWithIcon)
    app.component('ButtonLoading', ButtonLoading)
    app.component('PointCloudBasic', PointCloudBasic)
    app.component('PointCloudColor', PointCloudColor)
    app.component('PointCloudAnimation', PointCloudAnimation)
    
    // Register Splitpanes demos
    app.component('SplitpanesBasic', SplitpanesBasic)
    app.component('SplitpanesHorizontal', SplitpanesHorizontal)
    app.component('SplitpanesNested', SplitpanesNested)
    app.component('SplitpanesNoPush', SplitpanesNoPush)
    //Register CYSteps demos
    app.component('CYSteps', CYSteps)
    app.component('StepsBasic', StepsBasic)
    app.component('StepsVertical', StepsVertical)
  }
} satisfies Theme
