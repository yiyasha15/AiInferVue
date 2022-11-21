import { createApp } from 'vue'
import router from '../src/router'
import '../src/style.css'
import App from '../src/App.vue'
import VueAxios from 'vue-axios'
createApp(App)
.use(router, VueAxios)
.mount('#app')
