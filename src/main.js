import './assets/style/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import {pluginLang} from '@/plugins/lang'
const app = createApp(App)

app.use(createPinia())
app.use(router).use(pluginLang)

app.mount('#app')
