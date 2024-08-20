<template>
    <div>
      <footer>
        <p>&copy; <span id="year"></span> Micasa. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      const year = new Date().getFullYear();
      document.getElementById("year").textContent = year;
    }
  };
  </script>
  
  <style>
  footer {
    background-color: #FAF9F8;
    width: 100%;
    padding: 20px;
    text-align: center;
    
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    font-size: 14px;
    color: black;
    z-index: 1000;
  }
  
  /* Default styles for mobile devices */
  @media (max-width: 599px) {
    footer {
      font-size: 12px;
      padding: 15px;
    }
  }
  
  /* Styles for tablets */
  @media (min-width: 600px) and (max-width: 1023px) {
    footer {
      font-size: 14px;
      padding: 18px;
    }
  }
  
  /* Styles for small desktops */
  @media (min-width: 1024px) and (max-width: 1439px) {
    footer {
      font-size: 14px;
      padding: 20px;
    }
  }
  
  /* Styles for large desktops */
  @media (min-width: 1440px) {
    footer {
      font-size: 16px;
      padding: 25px;
    }
  }
  
  p {
    margin: 0;
  }
  </style>
  