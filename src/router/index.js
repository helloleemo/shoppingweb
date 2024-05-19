import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(), //(import.meta.env.BASE_URL)
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/Portfolio',
      component: () => import('../views/Portfolio.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      //巢狀路由寫法
      children: [
        {
          path: 'products',
          component: () => import('../views/Products.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/Coupons.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/Orders.vue')
        }
      ]
    },
    //客戶端
    {
      path: '/user',
      component: () => import('../views/Userboard.vue'),
      children: [
        {
          path: 'view',
          component: () => import('../views/LandingPage.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/UserCart.vue')
        },
        {
          path: 'cartview',
          component: () => import('../views/UserCartView.vue')
        },
        {
          path: 'cartorder',
          component: () => import('../views/UserOrder.vue')
        },
        {
          path: 'product/:productId',
          component: () => import('../views/UserProduct.vue')
        },
        {
          path: 'checkout/:orderId',
          component: () => import('../views/UserCheckout.vue')
        }
      ]
    },
    //作品集
    {
      path: '/todolist',
      component: () => import('../views/ToDoList.vue')
    }
  ]
})

export default router
