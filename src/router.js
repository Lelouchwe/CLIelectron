import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login'
import MyGames from './views/MyGames'
import GlobalStore from './views/GlobalStore'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/login'
    },
    {
      path:'/globalstore',
      name:'globalStore',
      component:GlobalStore
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/mygames',
      name:'mygames',
      component:MyGames
    }
  ]
})
