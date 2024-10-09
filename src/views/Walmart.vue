<template>
  <div class="walmart">
    <h2>Walmart Products</h2>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="products.length">
      <div v-for="product in products" :key="product.id" class="product">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
    </div>
    <p v-else>Loading Walmart products...</p>
  </div>
</template>

<script>
export default {
  name: 'Walmart',
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
        { id: 1, name: "Great Value Bread", price: "$2.99" },
        { id: 2, name: "Mainstays Desk Lamp", price: "$14.99" },
        { id: 3, name: "Ozark Trail Camping Tent", price: "$79.99" }
      ]

      // Simulate API call with a delay
      setTimeout(() => {
        this.products = mockProducts
      }, 1000)
    }
  }
}
</script>