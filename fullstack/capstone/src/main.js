import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App);

app.component('cart-modal', {
    template: `
        <div class="modal" v-if="showModal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <!-- Cart items go here -->
            </div>
        </div>
    `,
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
    },
});

// Use Vue Router and Vuex on the same app instance
app.use(store);
app.use(router);

app.mount('#app');

