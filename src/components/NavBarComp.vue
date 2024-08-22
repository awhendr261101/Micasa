<template>
    <nav>
      <ul class="navbar">
        <li class="brand">
          <img src="https://jords-springy.github.io/hostedimages/images/logo.png" alt="Micasa Logo" class="logo" />
        </li>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
      </ul>
    </nav>
  
    <router-view />
  </template>
  
  
    <style scoped>
    @import url('../assets/css/styles.css');
  
    </style>
    