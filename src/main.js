import {
    createApp
} from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/fonts.css';
import './assets/css/style.css';
import './assets/css/iconmoon.css';
import './assets/css/tailwind.css'
import './assets/css/xsIcon.css'
const app = createApp(App)
app.use(router)
app.mount('#app')