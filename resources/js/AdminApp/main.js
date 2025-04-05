import { createApp } from 'vue';
import AdminApp from './App.vue';
import router from './router/index.js'; 

const app = createApp(AdminApp);
app.use(router);
app.mount('#admin-app');