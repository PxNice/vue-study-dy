//API key:8870f17dec144a76b3b660d311e98a6d

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'



createApp(App).use(store).use(router).mount('#app')
