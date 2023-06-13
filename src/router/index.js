import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/static/index.vue'
import User from '../views/static/user.vue'
import Info from '@/views/static/info.vue'
import Footer from '@/layout/footer.vue'
import Header from '@/layout/header.vue'
import LayoutAdmin from '@/layout/admin/index.vue'
const routes = [
  { path: '/', name: 'home', components: { default: Index, Footer, Header } },
  { path: '/index', redirect: '/' },
  { path: '/user', name: 'user', component: User, meta: { title: 'user页面', Auth: true } },
  { path: '/user/:id(\\d+)', name: 'userId', component: User, props: true },
  { path: '/adcate', name: 'adCate', component: () => import('../views/static/adCate.vue') },
  { path: '/login', name: 'login', component: () => import('../views/static/login.vue') },
  { path: '/object', name: 'object', component: () => import('../views/static/object.vue'), children: [{ path: '', name: 'objectinfo', component: Info }, { path: 'login', component: import('@/views/static/login.vue') }] },
  { path: '/shops', name: 'shops', component: () => import('../views/static/shop.vue') },
  { path: '/cart', name: 'cart', component: () => import('../views/static/cart.vue') },
  {
    path: '/admin', name: 'admin', component: LayoutAdmin, children: [{
      path: '',
      name: 'admin-index',
      component: () => import('@/views/admin/index.vue')
    },
    {
      path: 'info',
      name: 'admin-info',
      component: () => import('@/views/admin/info.vue')
    },
    {
      path: 'logout',
      name: 'admin-logout',
      component: () => import('@/views/admin/logout.vue')
    },
    {
      path: 'changepassword',
      name: 'admin-changepassword',
      component: () => import('@/views/admin/changepassword.vue')
    },
    {
      path: 'forgetpassword',
      name: 'admin-forgetpassword',
      component: () => import('@/views/admin/forgetpassword.vue')
    },
    ]
  },
  { path: '/:pathMatch(.*)*', name: '404', component: () => import('../views/404.vue') }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  next();
  // console.log(to,from)
  // if(to.name!=='cart'){
  //   next({name:'cart'})
  // }else{
  //   next();
  // }

})
export default router