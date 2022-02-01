import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'IsBirthday',
    component: () => import('../views/IsBirthdayToday.vue'),
    meta: { transition: 'slide-left' },
    props: (route) => ({ celebrant: route.query.n }),
  },
  {
    path: '/birthday',
    name: 'Birthday',
    component: () => import('../views/HappyBirthday.vue'),
    props: (route) => ({ celebrant: route.query.name }),
    meta: { transition: 'slide-left' },
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue'),
    meta: { transition: 'slide-left' },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
