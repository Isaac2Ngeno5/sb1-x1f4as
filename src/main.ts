import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Amazon from './views/Amazon.vue'
import Ebay from './views/Ebay.vue'
import Walmart from './views/Walmart.vue'
import Login from './views/Login.vue'
import { useAuthStore } from './stores/auth'

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/amazon', component: Amazon, meta: { requiresAuth: true } },
    { path: '/ebay', component: Ebay, meta: { requiresAuth: true } },
    { path: '/walmart', component: Walmart, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')