<template>
    <nav>
      <ul class="navbar">
        <li class="brand">
          <img src="https://jords-springy.github.io/hostedimages/images/logo.png" alt="Micasa Logo" class="logo" />
        </li>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/admin">Admin</router-link></li>
      </ul>
    </nav>
  
    <router-view />
  </template>
  
  <style scoped>
  * {
    font-family: Roboto;
  }
  
  .navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #FAF9F8;
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 1000;
  }
  .brand{
    height:min-content;
    width:min-content
  }
  .navbar .brand {
    margin-right: auto;
  }
  
  .navbar .brand .logo {
  max-width: 60px; /* Reduce the width to 50px */
  height: 60px; /* Set a fixed height of 30px */
}
  
  .navbar li {
    margin-left: 20px;
  }
  
  .navbar li a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    padding: 15px 20px;
  }
  
  .navbar li a:hover {
    background-color: #cfcdcd;
    border-radius: 5px;
  }
  
  body {
    padding-top: 60px;
  }
  
  .router-link-active {
    color: #575757;
  }
  
  /* Default styles for mobile devices */
  @media (max-width: 599px) {
    .navbar {
      flex-direction: column;
      padding: 10px;
      height: auto;
    }
    .navbar li {
      margin-left: 0;
      margin-top: 10px;
    }
    .navbar .brand {
      margin-bottom: 10px;
    }
    .navbar li a {
      padding: 10px;
      font-size: 12px;
    }
  }
  
  /* Styles for tablets */
  @media (min-width: 600px) and (max-width: 1023px) {
    .navbar {
      flex-direction: row;
      padding: 15px;
    }
    .navbar li {
      margin-left: 15px;
    }
    .navbar li a {
      padding: 12px 15px;
      font-size: 14px;
    }
  }
  
  /* Styles for small desktops */
  @media (min-width: 1024px) and (max-width: 1439px) {
    .navbar {
      flex-direction: row;
      padding: 20px;
    }
    .navbar li {
      margin-left: 20px;
    }
    .navbar li a {
      padding: 15px 20px;
      font-size: 14px;
    }
  }
  
  /* Styles for large desktops */
  @media (min-width: 1440px) {
    .navbar {
      flex-direction: row;
      padding: 25px;
    }
    .navbar li {
      margin-left: 25px;
    }
    .navbar li a {
      padding: 20px 25px;
      font-size: 16px;
    }
  }
  </style>
  