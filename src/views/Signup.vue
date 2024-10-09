<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title text-center mb-4">Sign Up</h2>
          <form @submit.prevent="handleSignup">
            <div class="mb-3">
              <label for="username" class="form-label">Username:</label>
              <input type="text" id="username" v-model="username" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password:</label>
              <input type="password" id="password" v-model="password" class="form-control" required>
            </div>
            <div class="mb-3">
              <label for="confirmPassword" class="form-label">Confirm Password:</label>
              <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control" required>
            </div>
            <div class="d-grid">
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <p v-if="error" class="text-danger mt-3">{{ error }}</p>
          <p class="mt-3 text-center">
            Already have an account? <router-link to="/login">Login</router-link>
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
  name: 'Signup',
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      error: ''
    }
  },
  methods: {
    ...mapActions(useAuthStore, ['signup']),
    handleSignup() {
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match'
        return
      }
      if (this.signup(this.username, this.password)) {
        this.$router.push('/')
      } else {
        this.error = 'Username already exists'
      }
    }
  }
}
</script>