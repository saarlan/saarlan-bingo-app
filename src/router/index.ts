import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import { Routes } from './routes';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.Index,
    component: () => import('~/layouts/default.vue'),
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  const { title } = to.meta;

  if (title) {
    useLayoutStore().title = title;
  } else {
    useLayoutStore().title = 'SaarLAN Bingo';
  }

  return next();
});

export default router;
