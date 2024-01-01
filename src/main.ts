import { createApp } from 'vue'
import { createPinia } from 'pinia'
import createRouter from './router/index.ts'
import './style/style.scss'
import App from './App.vue'

const pinia = createPinia()
const router = createRouter()
const app = createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
