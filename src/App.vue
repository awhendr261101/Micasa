
<template>
  <!-- <nav> -->
    
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/products">Products</router-link> |
    <router-link to="/admin">Admin</router-link> |
    <router-link to="/contact">Contact</router-link> 
    Add other nav items here -->
  
    <NavBarComp/>
    
    <FooterComp/>
  <!-- </nav> -->
  <!-- <router-view/> -->
</template>

<script>

import FooterComp from './components/FooterComp.vue';
import NavBarComp from './components/NavBarComp.vue';


export default {
  components:{NavBarComp, FooterComp}

}
</script>
<style>
#app {
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
  }
</style>
