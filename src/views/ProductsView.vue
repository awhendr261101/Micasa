<template>
    <div class="product-page">
      <!-- Main Product Image Section -->
      <div class="product-header">
        <h1>Products</h1>
      </div>
      <h2>What we offer</h2>
      <!-- Product Listing and Sidebar Section -->
      <div class="content-container">
        <div class="product-grid">
          <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.image" :alt="product.name" />
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <button class="view-more-btn" @click="toggleProductDetails(product)">
                View More
              </button>
            </div>
            <div class="product-details" v-if="product.showDetails">
              <p>{{ product.description }}</p>
              <p>R{{ product.price }}</p>
            </div>
          </div>
        </div>
  
        <!-- Sidebar Filters -->
        <div class="sidebar">
          <div class="search-container">
            <input type="text" placeholder="Search..." />
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </button>
          </div>
          <h4>Categories</h4>
          <ul>
            <li v-for="category in categories" :key="category">{{ category }}</li>
          </ul>
  
          <h4>Filter by Price</h4>
          <ul>
            <li v-for="price in priceFilters" :key="price">{{ price }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'ProductPage',
    data() {
      return {
        products: [
          { id: 1, name: 'Product 1', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 100, description: 'This is a description of Product 1', showDetails: false },
          { id: 2, name: 'Product 2', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 200, description: 'This is a description of Product 2', showDetails: false },
          { id: 3, name: 'Product 3', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 150, description: 'This is a description of Product 3', showDetails: false },
          { id: 4, name: 'Product 4', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 350, description: 'This is a description of Product 4', showDetails: false },
          { id: 5, name: 'Product 5', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 120, description: 'This is a description of Product 5', showDetails: false },
          { id: 6, name: 'Product 6', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 375, description: 'This is a description of Product 6', showDetails: false },
          { id: 7, name: 'Product 7', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 250, description: 'This is a description of Product 7', showDetails: false },
          { id: 8, name: 'Product 8', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 125, description: 'This is a description of Product 8', showDetails: false },
          { id: 9, name: 'Product 9', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 325, description: 'This is a description of Product 9', showDetails: false },
          { id: 10, name: 'Product 10', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 140, description: 'This is a description of Product 10', showDetails: false },
          { id: 11, name: 'Product 11', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 170, description: 'This is a description of Product 11', showDetails: false },
          { id: 12, name: 'Product 12', image: 'https://jords-springy.github.io/hostedimages/images/product.jpg', price: 110, description: 'This is a description of Product 12', showDetails: false },
          // Add more products as needed
        ],
        categories: ['Living Room', 'Bedroom', 'Office'],
        priceFilters: ['R0 - R100', 'R100 - R200', 'R200 - R300', 'R300 - R400', 'R400 - R500'],
      };
    },
    methods: {
      toggleProductDetails(product) {
        product.showDetails = !product.showDetails;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Product Page Layout */
  .product-page {
    padding: 20px;
  }
  
  .product-header {
    background-image: url("https://jords-springy.github.io/hostedimages/images/products_page.jpg");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* Content Container for Products and Sidebar */
  .content-container {
    display: flex;
    justify-content: space-between;
  }
  
  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    width: 75%;
  }
  
  .product-card {
    background-color: white;
    text-align: center;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .product-card img {
    width: 100%;
    height: auto;
  }
  
  .product-info {
    margin-top: 15px;
  }
  
  .product-info h3 {
    font-size: 16px;
    font-weight: normal;
  }
  
  .product-info .view-more-btn {
    margin-top: 10px;
    background-color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
  }
  
  .product-details {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  
  .product-details h4 {
    margin-top: 0;
  }
  
  /* Sidebar */
  .sidebar {
    width: 25%;
    padding-left: 20px;
  }
  
  .sidebar input[type="search"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
  }
  
  .sidebar h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar ul li {
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .sidebar ul li:hover {
    text-decoration: underline;
  }
  
  .search-container {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
  }
  
  .search-container input {
    border: none;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px 0 0 5px;
    flex-grow: 1;
  }
  
  .search-container button {
    background-color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
  }
  
  .search-container button svg {
    fill: #333;
    width: 18px;
    height: 18px;
  }
  
  .search-container button:hover svg {
    fill: #000;
  }
  
  /* Responsive Design */
  @media screen and (max-width: 768px) {
    .content-container {
      flex-direction: column;
    }
  
    .product-grid {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    }
  
    .sidebar {
      width: 100%;
      padding-left: 0;
      margin-top: 30px;
    }
  }
  
  @media screen and (max-width: 480px) {
    .product-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  </style>
  