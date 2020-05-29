import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import RouterView from '../components/routerView.vue';

const Pagination = () => import(/* webpackChunkName: "Pagination" */ '../components/pagination.vue');
const Login = () => import(/* webpackChunkName: "Login" */ '../views/userModule/Login.vue');
const Sign = () => import(/* webpackChunkName: "Sign" */ '../views/userModule/Sign.vue');
const UserList = () => import(/* webpackChunkName: "UserList" */ '../views/userListModule/UserList.vue');

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    components:{
      default:RouterView,
      pagination:Pagination
    },
    children:[
      {
        path:'/',
        redirect:'login'
      },
      {
        path:'login',
        component:Login
      },
      {
        path:'sign',
        component:Sign
      },
    ]
  },
  {
    path:'/userlist',
    component:UserList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
