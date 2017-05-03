import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Write from '@/pages/Write/Write.vue'
import My from '@/pages/My/My.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    { path: '/home', component: Home },
    { path: '/write', component: Write },
    { path: '/my', component: My },
    { path: '/', redirect: '/home' },
    { path: '*', redirect: '/home' }
  ]
})
