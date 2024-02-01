import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '../views/dashboardView.vue'
import PostJob from '../views/postJobView.vue'
import LoginView from '../views/loginView.vue'
import RegisterView from '../views/registerView.vue'

const routes = [
  {
    path: '/dashboard/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/dashboard/post-job',
    name: 'post-job',
    component: PostJob
  },
  {
    path: '/dashboard/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard/register',
    name: 'register',
    component: RegisterView,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
