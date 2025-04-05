import { createRouter, createWebHistory } from 'vue-router'

// Import các component view cho admin
import Dashboard from '../views/Dashboard.vue'
// import Products from '../views/Products.vue'
// import Users from '../views/Users.vue'

const routes = [
    {
        path: '/admin',
        name: 'admin.dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },
    // {
    //     path: '/admin/products',
    //     name: 'admin.products',
    //     component: Products
    // },
    // {
    //     path: '/admin/users',
    //     name: 'admin.users',
    //     component: Users
    // },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    linkActiveClass: 'active', // class CSS cho active link
})

// Xử lý auth guard nếu cần
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // Kiểm tra đăng nhập ở đây
        // if (!auth.loggedIn()) next('/login')
        // else next()
        next() // Tạm bỏ qua để test
    } else {
        next()
    }
})

export default router