<template>
  <div class="home">
    <!-- Hero Section -->
    <div class="section">
      <div class="star-background"></div>
      <img src="https://jords-springy.github.io/hostedimages/images/landing.jpg" alt="Landing Page Image" class="hero-image">
      <div class="text">
        <h1>Welcome to MiCasa</h1>
        <p>Transform any space into a cozy, elegant haven. Discover a curated collection of unique furniture, modern accents, and timeless pieces designed to inspire and elevate your home.</p>
        <button class="explore-btn">Explore Our Collection</button>
      </div>
    </div>

    <!-- Categories Section -->
    <div class="categories">
      <h2>Shop By Category</h2>
      <div class="category-grid">
        <div class="category">
          <img src="path/to/category1.jpg" alt="Category 1">
          <h3>Living Room</h3>
        </div>
        <div class="category">
          <img src="path/to/category2.jpg" alt="Category 2">
          <h3>Bedroom</h3>
        </div>
        <div class="category">
          <img src="path/to/category3.jpg" alt="Category 3">
          <h3>Office</h3>
        </div>
      </div>
    </div>

    <!-- Featured Products Section -->
    <div class="featured-products">
      <h2>Featured Products</h2>
      <div class="product-grid">
        <div class="product">
          <img src="path/to/product1.jpg" alt="Product 1">
          <h3>Product 1</h3>
          <p>R49.99</p>
          <button class="view-details-btn">View Details</button>
        </div>
        <div class="product">
          <img src="path/to/product2.jpg" alt="Product 2">
          <h3>Product 2</h3>
          <p>R89.99</p>
          <button class="view-details-btn">View Details</button>
        </div>
        <div class="product">
          <img src="path/to/product3.jpg" alt="Product 3">
          <h3>Product 3</h3>
          <p>R69.99</p>
          <button class="view-details-btn">View Details</button>
        </div>
      </div>
    </div>

    <!-- Call-to-Action Section -->
    <div class="cta-section">
      <h2>Limited Time Offer!</h2>
      <p>Get 20% off on all items. Use code <strong>SALE20</strong> at checkout.</p>
      <button class="shop-now-btn">Shop Now</button>
    </div>

    <!-- Customer Reviews Section -->
    <div class="reviews">
      <h2>Customer Reviews</h2>
      <div class="review">
        <p>"Excellent service and high-quality products! Will definitely shop here again." - Emily R.</p>
      </div>
      <div class="review">
        <p>"The furniture is beautiful and exactly as described. Very satisfied!" - Michael B.</p>
      </div>
    </div>

    <!-- Newsletter Signup Section -->
    <div class="newsletter">
      <h2>Stay Updated!</h2>
      <p>Sign up for our newsletter and never miss out on new arrivals and exclusive offers.</p>
      <input type="email" placeholder="Enter your email">
      <button class="subscribe-btn">Subscribe</button>
    </div>

    <!-- Social Media Links Section -->
    <div class="social-media">
      <h2>Follow Us</h2>
      <a href="https://facebook.com/mi-casa" target="_blank">Facebook</a>
      <a href="https://instagram.com/mi-casa" target="_blank">Instagram</a>
      <a href="https://twitter.com/mi-casa" target="_blank">Twitter</a>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  color:black
}

.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  color: #333;
  font-family: Arial, sans-serif;
  position: relative;
}

.section {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(60%);
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  padding: 30px;
  background: #f9f9f9;
  border-radius: 10px;
}

.text h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.text p {
  font-size: 20px;
  margin-bottom: 20px;
}

.explore-btn {
  background-color: #b67d6f;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.explore-btn:hover {
  background-color: #a15b4c;
}

.categories {
  padding: 40px 20px;
  background: #f9f9f9;
}

.categories h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}

.category-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.category {
  text-align: center;
  width: 250px;
  margin: 15px;
}

.category img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category h3 {
  margin-top: 10px;
  font-size: 20px;
}

.featured-products {
  padding: 40px 20px;
  background: #fff;
}

.featured-products h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}

.product-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.product {
  background: #fefefe;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  width: 220px;
  margin: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product h3 {
  font-size: 18px;
  margin: 10px 0;
}

.product p {
  font-size: 16px;
  color: #555;
}

.view-details-btn {
  background-color: #b67d6f;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;
}

.view-details-btn:hover {
  background-color: #a15b4c;
}

.cta-section {
  padding: 40px 20px;
  text-align: center;
  background: #555;
  color: #fff;
}

.cta-section h2 {
  font-size: 36px;
  margin-bottom: 15px;
}

.cta-section p {
  font-size: 20px;
  margin-bottom: 20px;
}

.shop-now-btn {
  background-color: #fff;
  color: #f7b733;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.shop-now-btn:hover {
  background-color: #f7a30f;
}

.reviews {
  padding: 40px 20px;
  background: #f9f9f9;
}

.reviews h2 {
  text-align: center;
  font-size: 32px;
  margin-bottom: 30px;
}

.review {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 10px auto;
  max-width: 700px;
  border-radius: 8px;
  background: #fff;
}

.newsletter {
  padding: 40px 20px;
  background: #f2f2f2;
  text-align: center;
}

.newsletter h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.newsletter p {
  font-size: 18px;
  margin-bottom: 20px;
}

.newsletter input {
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-right: 10px;
  font-size: 16px;
}

.subscribe-btn {
  background-color: #b67d6f;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.subscribe-btn:hover {
  background-color: #a15b4c;
}

.social-media {
  padding: 20px;
  text-align: center;
  background: #fff;
}

.social-media h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.social-media a {
  margin: 0 15px;
  color: #0077b5;
  font-size: 18px;
  text-decoration: none;
}

.social-media a:hover {
  text-decoration: underline;
}

.star-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://example.com/starry-sky.png') repeat;
  z-index: 1;
  opacity: 0.4;
  pointer-events: none;
}
</style>
