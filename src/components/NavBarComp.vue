<template>
    <nav>
      <ul class="navbar">
        <li class="brand">Micasa</li>
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
  *{
    font-family:Roboto
  }
  .navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: #FAF9F8;
    width: 100%;
    height: auto; /* Allow height to adjust based on content */
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row; /* Default layout */
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 1000;
  }
  
  .navbar .brand {
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-right: auto;
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
      flex-direction: column; /* Stack items vertically on small screens */
      padding: 10px;
      height: auto; /* Allow height to adjust based on content */
    }
    .navbar li {
      margin-left: 0;
      margin-top: 10px; /* Space between stacked items */
    }
    .navbar .brand {
      font-size: 18px; /* Smaller font size for the brand */
      margin-bottom: 10px; /* Space below the brand */
    }
    .navbar li a {
      padding: 10px;
      font-size: 12px; /* Smaller font size for links */
    }
  }
  
  /* Styles for tablets */
  @media (min-width: 600px) and (max-width: 1023px) {
    .navbar {
      flex-direction: row; /* Default layout for tablets */
      padding: 15px;
    }
    .navbar li {
      margin-left: 15px; /* Adjust space between items */
    }
    .navbar .brand {
      font-size: 20px; /* Adjusted font size for the brand */
    }
    .navbar li a {
      padding: 12px 15px;
      font-size: 14px;
    }
  }
  
  /* Styles for small desktops */
  @media (min-width: 1024px) and (max-width: 1439px) {
    .navbar {
      flex-direction: row; /* Default layout for small desktops */
      padding: 20px;
    }
    .navbar li {
      margin-left: 20px;
    }
    .navbar .brand {
      font-size: 22px; /* Adjusted font size for the brand */
    }
    .navbar li a {
      padding: 15px 20px;
      font-size: 14px;
    }
  }
  
  /* Styles for large desktops */
  @media (min-width: 1440px) {
    .navbar {
      flex-direction: row; /* Default layout for large desktops */
      padding: 25px;
    }
    .navbar li {
      margin-left: 25px;
    }
    .navbar .brand {
      font-size: 24px; /* Larger font size for the brand */
    }
    .navbar li a {
      padding: 20px 25px;
      font-size: 16px;
    }
  }
  </style>
  