import { createRouter, createWebHistory } from 'vue-router'

// import HomeComponen from '../views/HomeComponen.vue'
// import LoginComponen from '../views/LoginComponen.vue'
// import RegisComponent from '../views/RegisComponent.vue'

const HomeComponen = () => import('../views/HomeComponen.vue')
const LoginComponen = () => import('../views/LoginComponen.vue')
const RegisComponent = () => import('../views/RegisComponent.vue')
const ShopComponen = () => import('../views/ShopComponen.vue')


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginComponen
    },
    {
      path: '/regis',
      name: 'register',
      component: RegisComponent
    },
    {
      path: '/home',
      name: 'home',
      component: HomeComponen
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopComponen
    },
  ]
})

export default router
