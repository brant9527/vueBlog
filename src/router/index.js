import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Article from '@/pages/Article/Index.vue'
import Write from '@/pages/Write/Write.vue'
import My from '@/pages/My/My.vue'
import Login from '@/pages/Login/Login.vue'
import Register from '@/pages/Register/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    { path: '/home', component: Home },
    { path: '/article/:id', component: Article },
    { path: '/write', component: Write },
    { path: '/my', component: My },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/', redirect: '/home' },
    { path: '*', redirect: '/home' }
  ]
})
