import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home')
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  {
    name: 'star',
    path: '/star',
    component: () => import('pages/star')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('pages/user')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search')
  }
];

const router = new VueRouter({
  routes
});

export default router;
