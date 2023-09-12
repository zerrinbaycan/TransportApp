import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  /*{
    path: '/newrequest',
    name: 'newrequest',
    component: () => import('../views/NewRequestCard.vue')
  },*/
  {
    path: '/loginorNewAccount',
    name: 'loginorNewAccount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //'../views/CreateAccount.vue'
    component: () => import(/* webpackChunkName: "about" */ '../components/LoginorNewAccount.vue')
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //'../views/CreateAccount.vue'
    component: () => import('../components/CreateAccount.vue')
  },
  {
    path: '/userlogin',
    name: 'userlogin',   
    component: () => import( '../components/UserLogin.vue')
  },
  {
    path: '/transportInfo',
    name: 'transportInfo',   
    component: () => import( '../components/TransportRequestInfo.vue')
  },
  {
    path: '/vehicleList',
    name: 'vehicleList',   
    component: () => import( '../components/VehicleList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
