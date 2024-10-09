<template>
  <div class="ebay">
    <h2>eBay Products</h2>
    <div v-if="error">{{ error }}</div>
    <div v-else-if="products.length">
      <div v-for="product in products" :key="product.id" class="product">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}</p>
      </div>
    </div>
    <p v-else>Loading eBay products...</p>
  </div>
</template>

<script>
export default {
  name: 'Ebay',
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
        { id: 1, name: "Vintage Watch", price: "$199.99" },
        { id: 2, name: "Collectible Comic Book", price: "$59.99" },
        { id: 3, name: "Antique Furniture", price: "$499.99" }
      ]

      // Simulate API call with a delay
      setTimeout(() => {
        this.products = mockProducts
      }, 1000)
    }
  }
}
</script>