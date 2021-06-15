import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Index.vue')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../layouts/Layout.vue')
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

// router.beforeEach((to, from, next) => {
// 	next()
// })

export default router;
