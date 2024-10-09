<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Login</h2>
          <form @submit.prevent="handleLogin">
            <div class="mb-3">
              <label for="username" class="form-label">Username:</label>
              <input type="text" id="username" v-model="username" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password:</label>
              <input type="password" id="password" v-model="password" class="form-control" required>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
          <p v-if="error" class="text-danger mt-3">{{ error }}</p>
          <p class="mt-3 text-center">
            Don't have an account? <router-link to="/signup">Sign up</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '../stores/auth'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['login']),
    handleLogin() {
      if (this.login(this.username, this.password)) {
        this.$router.push('/')
      } else {
        this.error = 'Invalid username or password'
      }
    }
  }
}
</script>