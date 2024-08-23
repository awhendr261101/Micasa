<template>
    <div class="contact">
      <!-- Contact Us Section with Image Background -->
      <div data-aos="fade-down" data-aos-duration="500">
      <div class="contact-header">
        <h1>Contact Us</h1>
      </div>
      </div>
      <!-- Contact Information and Form Section -->
      <div class="contact-container">
        <!-- Contact Information Section -->
        <div class="contact-info">
          <p>
            We’re here to assist you in making your home truly beautiful. Whether you need design advice, have inquiries about our products, or require help with an order, please feel free to contact us at any time. Let’s work together to create your ideal space!
          </p>
          <div class="info-section">
            <div class="office-info">
              <h3>OUR OFFICE</h3>
              <h4>Address</h4>
              <p>
                Micasa Home Decor<br>
                The Decor Hub, 12 Bree Street<br>
                Cape Town, 8000<br>
                South Africa
              </p>
              <br>
              <h4>Contact Number</h4>
              <p>+27 21 123 4567</p>
              <br>
              <h4>Email Us</h4>
              <p>contact@micasahome.co.za</p>
              <br>
              <h4>Office Hours</h4>
              <p>
                Monday to Friday: 9:00 AM – 6:00 PM<br>
                Saturday: 10:00 AM – 4:00 PM<br>
                Sunday: Closed
              </p>
              <br>
            </div>
          </div>
        </div>
  
        <!-- Contact Form Section -->
        <div class="contact-form">
          <h2>Any Questions?</h2>
          <p>Use the form below to get in touch with us.</p>
          <form @submit.prevent="handleSubmit">
            <label for="name">Your Name </label>
            <input type="text" id="name" v-model="form.name" placeholder="Write your name here" required>
  
            <label for="email">Your Email </label>
            <input type="email" id="email" v-model="form.email" placeholder="Write your email here" required>
  
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" v-model="form.phone" placeholder="Write your phone number">
  
            <label for="subject">Subject </label>
            <input type="text" id="subject" v-model="form.subject" placeholder="Write your subject here" required>
  
            <label for="message">Your Message </label>
            <textarea id="message" v-model="form.message" placeholder="Write your message here" required></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        },
      };
    },
    methods: {
      handleSubmit() {
        // Custom validation
        if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
          alert('Please fill out all required fields.');
          return;
        }
  
        // Example of form submission logic
        fetch('https://formcarry.com/s/YOUR_FORMCARRY_URL', {
          method: 'POST',
          body: JSON.stringify(this.form),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok.');
            }
            return response.json();
          })
          .then(data => {
            alert('Your message has been sent successfully.');
            this.resetForm();
          })
          .catch(error => {
            alert('There was a problem with your submission. Please try again later.');
            console.error('Error:', error);
          });
      },
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.phone = '';
        this.form.subject = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('../assets/css/styles.css');


  </style>