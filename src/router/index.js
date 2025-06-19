import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/integrations',
      name: 'Integrations',
      component: () => import('@/views/integrations/index.vue')
    },
    {
      path: '/advantage',
      name: 'Advantage',
      component: () => import('@/views/service/advantage/index.vue')
    },
    {
      path: '/procurement',
      name: 'Procurement',
      component: () => import('@/views/service/procurement/index.vue')
    },
    {
      path: '/warehouse',
      name: 'Warehouse',
      component: () => import('@/views/service/warehouse/index.vue')
    },
    {
      path: '/logistics',
      name: 'Logistics',
      component: () => import('@/views/service/logistics/index.vue')
    },
    {
      path: '/valueAddedService',
      name: 'ValueAddedService',
      component: () => import('@/views/service/valueAddedService/index.vue')
    },
    {
      path: '/faq',
      name: 'Faq',
      component: () => import('@/views/faq/index.vue')
    },
    {
      path: '/aboutUs/jozo',
      name: 'Jozo',
      component: () => import('@/views/aboutUs/jozo/index.vue')
    },
    {
      path: '/aboutUs/blog',
      name: 'Blog',
      component: () => import('@/views/aboutUs/blog/index.vue')
    },
    {
      path: '/aboutUs/blog/detail',
      name: 'BlogDetail',
      component: () => import('@/views/aboutUs/blockDetail/index.vue')
    },
    {
      path: '/contractUs',
      name: 'ContractUs',
      component: () => import('@/views/contractUs/index.vue')
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('@/views/privacy/index.vue')
    },
    {
      path: '/termsOfUse',
      name: 'TermsOfUse',
      component: () => import('@/views/termsOfUse/index.vue')
    },
    {
      path: '/termsOfService',
      name: 'TermsOfService',
      component: () => import('@/views/termsOfService/index.vue')
    },
  ]
})

export default router
