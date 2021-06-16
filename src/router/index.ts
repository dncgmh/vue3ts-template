import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Index.vue')
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layouts/DashboardLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('../views/Dashboard/Index.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile/Index.vue')
      }
    ]
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
