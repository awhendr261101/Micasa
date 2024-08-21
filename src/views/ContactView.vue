<template>
    <div class="contact">
      <!-- Contact Us Section with Image Background -->
      <div class="contact-header">
        <h1>Contact Us</h1>
      </div>
  
      <!-- Contact Information and Form Section -->
      <div class="contact-container">
        <!-- Contact Information Section -->
        <div class="contact-info">
          <p>
            We're here to help you make your home beautiful! Whether you need design advice, have questions about our products, or need assistance with an order, reach out to us anytime. Let's create your perfect space together!
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
          <form action="https://formcarry.com/s/YOUR_FORMCARRY_URL" method="POST">
            <label for="name">Your Name </label>
            <input type="text" id="name" name="name" placeholder="Write your name here" required>
  
            <label for="email">Your Email </label>
            <input type="email" id="email" name="email" placeholder="Write your email here" required>
  
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Write your phone number">
  
            <label for="subject">Subject </label>
            <input type="text" id="subject" name="subject" placeholder="Write your subject here" required>
  
            <label for="message">Your Message </label>
            <textarea id="message" name="message" placeholder="Write your message here" required></textarea>
  
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import '../assets/css/styles.css'
  

  </style>
  