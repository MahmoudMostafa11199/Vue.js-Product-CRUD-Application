import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/home',
      redirect: '/',
    },
    {
      path: '/productDetails/:id',
      name: 'ProductDetails',
      component: () => import('@/views/ProductDetails.vue'),
    },
    {
      path: '/product/edit/:id',
      name: 'ProductEdit',
      component: () => import('@/views/ProductEdit.vue'),
    },
    {
      path: '/product/new',
      name: 'ProductNew',
      component: () => import('@/views/ProductNew.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
