import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TicketPage from '../views/TicketPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'TicketPage',
    component: TicketPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
