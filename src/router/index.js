import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/dashboardView.vue'
import PostJob from '../views/postJobView.vue'
import LoginView from '../views/loginView.vue'

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
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
