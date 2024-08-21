<template>
    <div class="products-card">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <!-- Show description and price only if `showDetails` is true -->
      <p v-if="showDetails">{{ product.description }}</p>
      <p v-if="showDetails">Price: R{{ product.price }}</p>
      <!-- Toggle details with button -->
      <button class="products-view-more-btn" @click="toggleProductDetails">
        {{ showDetails ? 'Show Less' : 'View More' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        showDetails: false
      };
    },
    methods: {
      toggleProductDetails() {
        this.showDetails = !this.showDetails;
      }
    }
  }
  </script>
  
  <style scoped>
  @import '../assets/css/styles.css'
  </style>
  