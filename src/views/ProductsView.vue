<template>
    <div class="product-page">
      
      <div class="product-header">
        <h1>Products</h1>
      </div>
      <h2>What we offer</h2>
      
      <div class="content-container">
        
        <div class="product-grid">
          <CardComp
            v-for="product in sortedProducts"
            :key="product.id"
            :product="product"
            @toggle-details="toggleProductDetails"
          />
        </div>
  
      
        <div class="sidebar">
          <div class="search-container">
            <input type="text" placeholder="Search..." v-model="searchQuery" />
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
            <li @click="showAllProducts">All Products</li>
            <li v-for="(category, index) in categories" :key="category + index" @click="filterByCategory(category)">
              {{ category }}
            </li>
          </ul>
  
          <h4>Filter by Price</h4>
          <ul>
            <li
              v-for="(priceRange, index) in priceFilters"
              :key="priceRange.label + index"
              @click="filterByPriceRange(priceRange)"
            >
              {{ priceRange.label }}
            </li>
          </ul>
  
          <select v-model="sortOrder" @change="persistSortOrder">
            <option value="id-asc">Select Sort Order</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CardComp from "../components/CardComp.vue";
  
  export default {
    name: "ProductsView",
    components: {
      CardComp,
    },
    data() {
      return {
        products: [
          { id: 1, name: "Product 1", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 100, description: "This is a description of Product 1", category: "Living Room" },
          { id: 2, name: "Product 2", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 200, description: "This is a description of Product 2", category: "Bedroom" },
          { id: 3, name: "Product 3", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 400, description: "This is a description of Product 3", category: "Office" },
          { id: 4, name: "Product 4", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 150, description: "This is a description of Product 4", category: "Living Room" },
          { id: 5, name: "Product 5", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 500, description: "This is a description of Product 5", category: "Living Room" },
          { id: 6, name: "Product 6", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 95, description: "This is a description of Product 6", category: "Office" },
          { id: 7, name: "Product 7", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 175, description: "This is a description of Product 7", category: "Living Room" },
          { id: 8, name: "Product 8", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 225, description: "This is a description of Product 8", category: "Bedroom" },
          { id: 9, name: "Product 9", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 120, description: "This is a description of Product 9", category: "Living Room" },
          { id: 10, name: "Product 10", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 300, description: "This is a description of Product 10", category: "Living Room" },
          { id: 11, name: "Product 11", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 345, description: "This is a description of Product 11", category: "Bedroom" },
          { id: 12, name: "Product 12", image: "https://jords-springy.github.io/hostedimages/images/product.jpg", price: 140, description: "This is a description of Product 12", category: "Office" },
        ],
        categories: ["Living Room", "Bedroom", "Office"],
        priceFilters: [
          { label: "R0 - R100", min: 0, max: 100 },
          { label: "R100 - R200", min: 100, max: 200 },
          { label: "R200 - R300", min: 200, max: 300 },
          { label: "R300 - R400", min: 300, max: 400 },
          { label: "R400 - R500", min: 400, max: 500 },
        ],
        selectedCategory: null,
        selectedPriceRange: null,
        searchQuery: "",
        sortOrder: "asc", 
      };
    },
    computed: {
      filteredProducts() {
        let filtered = this.products;
  
        if (this.selectedCategory) {
          filtered = filtered.filter((product) => product.category === this.selectedCategory);
        }
  
        if (this.selectedPriceRange) {
          filtered = filtered.filter((product) => {
            const price = Number(product.price);
            return price >= this.selectedPriceRange.min && price <= this.selectedPriceRange.max;
          });
        }
  
        if (this.searchQuery) {
          filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
  
        return filtered;
      },
      sortedProducts() {
    return this.filteredProducts.slice().sort((a, b) => {
      if (this.sortOrder === "asc") {
       
        return Number(a.price) - Number(b.price);
      } else if (this.sortOrder === "desc") {
       
        return Number(b.price) - Number(a.price);
      } else if (this.sortOrder === "id-asc") {
        
        return a.id - b.id;
      } else if (this.sortOrder === "id-desc") {
      
        return b.id - a.id;
      } else {
        
        return 0;
      }
    });
  },
},
    methods: {
      filterByCategory(category) {
        this.selectedCategory = category;
      },
      filterByPriceRange(priceRange) {
        this.selectedPriceRange = priceRange;
      },
      showAllProducts() {
        this.selectedCategory = null;
        this.selectedPriceRange = null;
      },
      persistSortOrder() {
        if (this.sortOrder) {
          localStorage.setItem("sortOrder", this.sortOrder);
        } else {
          localStorage.removeItem("sortOrder");
        }
      },
      retrieveSortOrder() {
        const savedSortOrder = localStorage.getItem("sortOrder");
        if (savedSortOrder) {
          this.sortOrder = savedSortOrder;
        }
      },
      toggleProductDetails(product) {
        // Implement the logic to toggle product details
      },
    },
    created() {
      this.retrieveSortOrder(); // Retrieve sort order when component is created
    },
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
    grid-template-columns: repeat(auto-fit, minmax(4, 1fr));
    gap: 20px;
    width: 75%;
  }
  
  /* Sidebar Styling */
  .sidebar {
    width: 25%;
    padding: 20px;
  }
  
  .search-container {
    display: flex;
  }
  
  input[type="text"] {
    flex-grow: 1;
  }
  
  button {
    background-color: #eee;
    border: none;
    cursor: pointer;
  }
  
  select {
    width: 100%;
    margin-top: 20px;
  }
  </style>
  