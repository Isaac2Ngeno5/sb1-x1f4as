import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    users: [], // This would typically be handled by a backend
  }),
  getters: {
    isAuthenticated() {
      return !!this.user
    },
  },
  actions: {
    login(username, password) {
      const user = this.users.find(u => u.username === username && u.password === password)
      if (user) {
        this.user = { username: user.username }
        return true
      }
      return false
    },
    logout() {
      this.user = null
    },
    signup(username, password) {
      if (this.users.some(u => u.username === username)) {
        return false // Username already exists
      }
      this.users.push({ username, password })
      this.user = { username }
      return true
    },
  },
})