import './bootstrap';
import { createApp } from 'vue';

// Đoạn này tuỳ theo layout đang gọi
import AdminApp from './admin/App.vue';
import UserApp from './user/Main.vue';

const el = document.getElementById('app')

if (el.dataset.view === 'admin') {
    import('./admin/main.js').then((module) => {
        module.default()
    })
} else {
    import('./user/Main.vue').then(({ default: Main }) => {
        const app = createApp(Main)
        app.mount('#app')
    })
}
