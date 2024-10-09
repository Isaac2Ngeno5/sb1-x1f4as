<template>
  <div class="amazon">
    <h2 class="mb-4">Amazon Products</h2>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-else-if="products.length" class="row">
      <div v-for="product in products" :key="product.id" class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <p v-else class="text-center">Loading Amazon products...</p>
  </div>
</template>

<script>
export default {
  name: 'Amazon',
  data() {
    return {
      products: [],
      error: null
    }
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    fetchProducts() {
      // Mock data
      const mockProducts = [
        { id: 1, name: "Amazon Echo Dot", price: "$49.99" },
        { id: 2, name: "Kindle Paperwhite", price: "$129.99" },
        { id: 3, name: "Fire TV Stick", price: "$39.99" }
      ]

      // Simulate API call with a delay
      setTimeout(() => {
        this.products = mockProducts
      }, 1000)
    }
  }
}
</script>