import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory('/shoppingweb/'), //(import.meta.env.BASE_URL)
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
      component: () => import('../views/AdminLogin.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/AdminDashboard.vue'),
      //巢狀路由寫法
      children: [
        {
          path: 'products',
          component: () => import('../views/AdminProducts.vue')
        },
        {
          path: 'coupons',
          component: () => import('../views/UserCoupons.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/AdminOrders.vue')
        }
      ]
    },
    //客戶端
    {
      path: '/user',
      component: () => import('../views/UserBoard.vue'),
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
    }
  ]
})

export default router
