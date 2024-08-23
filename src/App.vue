
<template>
  <!-- <nav> -->
    <SpinnerComp :isLoading="isLoading" />
    <div v-if="!isLoading">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/contact">Contact</router-link> 
    Add other nav items here -->
  
    <NavBarComp/>
    
    <FooterComp/>
    </div>
  <!-- </nav> -->
  <!-- <router-view/> -->
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
import SpinnerComp from './components/SpinnerComp.vue';

export default {
  components: {
    NavBarComp,
    FooterComp,
    SpinnerComp
  },
  data() {
    return {
      isLoading:true,
  };
},
  mounted() {
    this.fetchData();
    AOS.init(); // Initialize AOS when the component is mounted
  },
  methods: {
    async fetchData() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching data:", error);
        this.isLoading = false;
      }
    },
  },
};

</script>
<style>
@import url('./assets/css/styles.css');
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

  body{
    background-color: #FAF9F8;
  } */
</style>
