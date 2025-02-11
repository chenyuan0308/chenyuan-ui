import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import MyButton from '../../../src/components/MyButton.vue'
import Preview from '../components/preview.vue'
import ButtonBasic from '../components/button/basic.vue'
import ButtonDisabled from '../components/button/disabled.vue'
import ButtonWithIcon from '../components/button/with-icon.vue'
import ButtonLoading from '../components/button/loading.vue'
import AnchorNav from '../components/anchor-nav.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('cy-button', MyButton)
    app.component('Preview', Preview)
    app.component('ButtonBasic', ButtonBasic)
    app.component('ButtonDisabled', ButtonDisabled)
    app.component('ButtonWithIcon', ButtonWithIcon)
    app.component('ButtonLoading', ButtonLoading)
    app.component('AnchorNav', AnchorNav)
  }
} satisfies Theme
