<template>
  <div class="home">
    

<div data-aos="fade-down" data-aos-duration="500">
    <div class="section">
      <img src="https://jords-springy.github.io/hostedimages/images/landing.jpg" alt="Landing Page Image" class="hero-image">
      <div class="text">
        <h1>Welcome to Micasa</h1>
        <p>
          Turn any space into a stylish, inviting retreat with our curated selection of distinctive furniture, contemporary accents, and classic pieces. Explore our collection designed to inspire and enhance the elegance of your home.
        </p>
        <button class="explore-btn">
  <a href="/products" class="explore-link">Explore Our Collection</a>
</button>

      </div>
    </div>
</div>

<div data-aos="fade-right" data-aos-duration="500">
    <div class="categories">
      <div class="category-grid">
        <div class="category">
          <img src="https://jords-springy.github.io/hostedimages/images/livingroom.jpg" alt="Living Room">
        </div>
        <div class="category">
          <img src="https://jords-springy.github.io/hostedimages/images/bedroom.jpg" alt="Bedroom">
        </div>
        <div class="category">
          <img src="https://jords-springy.github.io/hostedimages/images/office.jpg" alt="Office">
        </div>
      </div>
    </div>
</div>

<div data-aos="fade-right" data-aos-duration="500">
    <div class="home-featured-products">
      <h2>Featured Products</h2>
      <div class="home-product-grid">
        <SingleCard
          v-for="product in featuredProducts" 
          :key="product.prodID" 
          :product="product"
        >
          <template #image>
            <img :src="product.prodUrl || 'default-image-url.jpg'" :alt="product.prodName || 'No Name'" />
          </template>
          <template #title>
            <h3>{{ product.prodName }}</h3>
          </template>
        </SingleCard>

        <div v-if="!featuredProducts.length">
          <p>No featured products available.</p>
        </div>
      </div>
    </div>
</div>

<div data-aos="fade-right">
    <div class="reviews">
      <h2>Customer Reviews</h2>
      <div class="review-cards">
        <div class="review-card">
          <p>"Outstanding service and top-notch products! I will definitely return to shop here."</p>
          <span>- Jamie</span>
        </div>
        <div class="review-card">
          <p>"The furniture is gorgeous and matches the description perfectly. I’m very pleased with my purchase!"</p>
          <span>- Alex</span>
        </div>
        <div class="review-card">
          <p>"Quick shipping, excellent customer service, and the items are beautiful. I highly recommend this store!"</p>
          <span>- Robyn</span>
        </div>
      </div>
    </div>
</div>
    

      <div class="social-media">
  <h2>Follow Us</h2>
  <a href="https://facebook.com/mi-casa" target="_blank" class="social-icon">
    <i class="fab fa-facebook-f"></i>
  </a>
  <a href="https://instagram.com/mi-casa" target="_blank" class="social-icon">
    <i class="fab fa-instagram"></i>
  </a>
  <a href="https://twitter.com/mi-casa" target="_blank" class="social-icon">
    <i class="fab fa-twitter"></i>
  </a>
</div>

    </div>
  
</template>




<script>
import SingleCard from '../components/SingleCard.vue'; // Adjust the path as needed

export default {
  components: {
    SingleCard
  },
  data() {
    return {
      products: [],
      featuredProducts: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('https://micasa.onrender.com/products');
        const data = await response.json();
        console.log('API Response:', data); // Log the API response

        if (Array.isArray(data.result)) {
          this.products = data.result;
          console.log('All Products:', this.products); // Log all products

          // Sort products by prodID in descending order and slice the first 3 products
          this.featuredProducts = this.products
            .sort((a, b) => b.prodID - a.prodID)
            .slice(0, 3);

          // Add a showDetails property to each featured product
          this.featuredProducts.forEach(product => {
            this.$set(product, 'showDetails', false);
          });

          console.log('Featured Products:', this.featuredProducts); // Log featured products
        } else {
          console.warn('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    toggleProductDetails(product) {
      // Toggle the showDetails flag for the specific product
      product.showDetails = !product.showDetails;
    }
  }
}
</script>


<style scoped>
@import url('../assets/css/styles.css');
</style>
