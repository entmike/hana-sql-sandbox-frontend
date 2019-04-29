import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Overview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Overview',
      component: Dashboard
    },{
      path: '/sql',
      name: 'sql',
      // route level code-splitting
      // this generates a separate chunk (sql.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/sql.vue')
    }
  ]
})
