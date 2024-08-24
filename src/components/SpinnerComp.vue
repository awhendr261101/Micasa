<template>
    <div v-if="isLoading" class="spinner"></div>
  </template>
    
    <script>
  export default {
    props: {
      isLoading: {
        type: Boolean,
        required: true,
      },
    },
  };
  </script>
    

    