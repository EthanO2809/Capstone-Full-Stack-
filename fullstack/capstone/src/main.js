import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
const app = Vue.createApp({});
app.mount('#app');
store.dispatch("initialize")

createApp(App).use(store).use(router).mount('#app')
