import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/dashboard/AnalyticsAward.vue')
  },
  // Thêm các route khác tùy theo cấu trúc Materio
]

const router = createRouter({
  history: createWebHistory('/'), // đảm bảo hoạt động đúng trong Laravel route
  routes,
})

export default router
