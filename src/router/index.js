import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/routes'
import guards from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(guards)

export default router
