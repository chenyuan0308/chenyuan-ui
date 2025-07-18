import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MyButton from '../../../src/components/MyButton.vue'
import MyPointCloud from '../../../src/components/pointCloud.vue'
import CYSplitpanes from '../../../src/components/CYSplitpanes.vue'
import CYPane from '../../../src/components/CYPane.vue'
import CYSteps from '../../../src/components/CYSteps.vue'
import CYEllipsis from '../../../src/components/CYEllipsis.vue'
import CYCard from '../../../src/components/CYCard.vue'
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

// Ellipsis demos
import EllipsisBasic from '../components/ellipsis/basic.vue'
import EllipsisMultiline from '../components/ellipsis/multiline.vue'
import EllipsisCustomWidth from '../components/ellipsis/custom-width.vue'
import EllipsisDisableTooltip from '../components/ellipsis/disable-tooltip.vue'
import EllipsisSmartTooltip from '../components/ellipsis/smart-tooltip.vue'

// Card demos
import CardBasic from '../components/card/basic.vue'
import Card3dEnabled from '../components/card/3d-enabled.vue'
import CardCustomAngle from '../components/card/custom-angle.vue'
import Card3dDisabled from '../components/card/3d-disabled.vue'
import CardRippleEnabled from '../components/card/ripple-enabled.vue'
import CardRippleDisabled from '../components/card/ripple-disabled.vue'
import CardWithShadow from '../components/card/with-shadow.vue'
import CardNoBorder from '../components/card/no-border.vue'
import CardCombined from '../components/card/combined.vue'

import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('CYButton', MyButton)
    app.component('CYPointCloud', MyPointCloud)
    app.component('CYSplitpanes', CYSplitpanes)
    app.component('CYPane', CYPane)
    app.component('CYSteps', CYSteps)
    app.component('CYEllipsis', CYEllipsis)
    app.component('CYCard', CYCard)

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
    
    // Register CYSteps demos
    app.component('StepsBasic', StepsBasic)
    app.component('StepsVertical', StepsVertical)
    
    // Register Ellipsis demos
    app.component('EllipsisBasic', EllipsisBasic)
    app.component('EllipsisMultiline', EllipsisMultiline)
    app.component('EllipsisCustomWidth', EllipsisCustomWidth)
    app.component('EllipsisDisableTooltip', EllipsisDisableTooltip)
    app.component('EllipsisSmartTooltip', EllipsisSmartTooltip)
    
    // Register Card demos
    app.component('CardBasic', CardBasic)
    app.component('Card3dEnabled', Card3dEnabled)
    app.component('CardCustomAngle', CardCustomAngle)
    app.component('Card3dDisabled', Card3dDisabled)
    app.component('CardRippleEnabled', CardRippleEnabled)
    app.component('CardRippleDisabled', CardRippleDisabled)
    app.component('CardWithShadow', CardWithShadow)
    app.component('CardNoBorder', CardNoBorder)
    app.component('CardCombined', CardCombined)
  }
} satisfies Theme
