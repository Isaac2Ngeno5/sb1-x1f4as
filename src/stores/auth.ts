import { defineStore } from 'pinia'

interface User {
  username: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    login(username: string, password: string) {
      // Mock authentication
      if (username === 'user' && password === 'password') {
        this.user = { username }
        return true
      }
      return false
    },
    logout() {
      this.user = null
    },
  },
})