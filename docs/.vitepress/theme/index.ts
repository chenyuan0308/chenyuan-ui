import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import MyButton from '../../../src/components/MyButton.vue'
import Preview from '../components/preview.vue'
import ButtonDemo from '../components/button-demo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('MyButton', MyButton)
    app.component('Preview', Preview)
    app.component('ButtonDemo', ButtonDemo)
  }
} satisfies Theme
