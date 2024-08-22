<template>
    <div class="product-page">
        <div data-aos="fade-down" data-aos-duration="500">
      <div class="product-header">
        <h1>Products</h1>
      </div>
      </div>
      <h2>What we offer</h2>
      <div class="content-container">
        <div class="product-grid">
<CardComp
    v-for="product in sortedProducts"
    :key="product.id"
    :product="product"
    @toggle-details="toggleProductDetails"
   >
    <template v-if="product.showDetails">
      <!-- render product details here -->
    </template>
  
</CardComp>
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
            <li @click="showAllProducts" :class="{ active: !selectedCategory }">All Products</li>
            <li v-for="(category, index) in categories" :key="index" @click="filterByCategory(category)" :class="{ active: selectedCategory === category }">
    {{ category }}
  </li>
  </ul>
  
          <h4>Filter by Price</h4>
          <ul>
            <li
              v-for="(priceRange, index) in priceFilters"
              :key="priceRange.label + index"
              @click="filterByPriceRange(priceRange)"
              :class="{ active: selectedPriceRange === priceRange }"
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
  import axios from "axios";
  
  
  export default {
    name: "ProductsView",
    components: {
      CardComp,
    },
    data() {
      return {
        products: [],
        categories: [],
        priceFilters: [
          { label: "Under R50", min: 0, max: 50 },
          { label: "R50 - R100", min: 50, max: 100 },
          { label: "R100 - R200", min: 100, max: 200 },
          { label: "Over R200", min: 200, max: Infinity },
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
          filtered = filtered.filter(
            (product) => product.Category === this.selectedCategory
          );
        }
  
        if (this.selectedPriceRange) {
          filtered = filtered.filter((product) => {
            const price = Number(product.amount);
            return (
              price >= this.selectedPriceRange.min &&
              price <= this.selectedPriceRange.max
            );
          });
        }
  
        if (this.searchQuery) {
          filtered = filtered.filter((product) =>
            product.prodName.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
  
        return filtered;
      },
      sortedProducts() {
        const sorted = this.filteredProducts.slice().sort((a, b) => {
          if (this.sortOrder === "asc") {
            return Number(a.amount) - Number(b.amount);
          } else if (this.sortOrder === "desc") {
            return Number(b.amount) - Number(a.amount);
          } else if (this.sortOrder === "id-asc") {
            return a.prodID - b.prodID;
          } else if (this.sortOrder === "id-desc") {
            return b.prodID - a.prodID;
          } else {
            return 0;
          }
        });
  
        return sorted;
      },
    },
    methods: {
      async fetchProducts() {
        try {
          const response = await axios.get("https://micasa.onrender.com/products");
          this.products = response.data.result;
          this.categories = [...new Set(this.products.map((product) => product.Category))];
          console.log('Categories:', this.categories); // Debugging
        } catch (error) {
          console.error(error);
        }
      },
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
        product.showDetails = !product.showDetails;
      },
    },
    created() {
      this.retrieveSortOrder();
    },
    mounted() {
      this.fetchProducts();
    },
  };
  </script>
  
  <style scoped>
  
  @import url('../assets/css/styles.css');
 
  </style>