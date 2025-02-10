import { createApp } from 'vue'
import App from './App.vue'
import ChenyuanUI from '../src/index'

const app = createApp(App)
app.use(ChenyuanUI)
app.mount('#app') 