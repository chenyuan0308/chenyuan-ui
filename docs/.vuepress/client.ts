import { defineClientConfig } from '@vuepress/client'
import MyButton from '../../src/components/MyButton.vue'
import Preview from './components/preview.vue'
import ButtonDemo from './components/button-demo.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('MyButton', MyButton)
    app.component('Preview', Preview)
    app.component('ButtonDemo', ButtonDemo)
  },
})
