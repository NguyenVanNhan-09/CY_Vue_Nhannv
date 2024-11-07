import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './routes/index.ts'
import "vue3-toastify/dist/index.css";
import '../node_modules/flowbite-vue/dist/index.css'
import {createPinia} from "pinia";

const app = createApp(App)
app.use(createPinia())
app.use(router);
app.mount('#app');
