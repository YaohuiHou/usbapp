import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: require('@/view/home.vue').default,
    },
    {
      path: '/',
      name: 'file',
      component: require('@/view/file.vue').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
