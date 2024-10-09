<template>
  <div class="home">
    <h1 class="text-center mb-4">{{ title }}</h1>
    <p class="lead text-center">Welcome to our multi-vendor storefront featuring products from Amazon, eBay, and Walmart.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      title: 'Multi-Vendor Storefront'
    }
  }
}
</script>