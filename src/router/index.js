import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/dashboardView.vue'
import PostJob from '../views/postJobView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/post-job',
    name: 'post-job',
    component: PostJob
  }  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
