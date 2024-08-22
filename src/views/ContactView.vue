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
  
  .contact {
    padding: 20px;
  }
  
  .contact-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .contact-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .contact-info, .contact-form {
    margin: 0 auto;
    max-width: 100%;
    padding: 10px;
  }
  
  .contact-info {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
  }
  
  .contact-info p, .contact-info h3, .contact-info h4 {
    margin: 0 0 10px;
  }
  
  .contact-form {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .contact-form h2 {
    margin-top: 0;
  }
  
  .contact-form label {
    margin-top: 10px;
    display: block;
  }
  
  .contact-form input, .contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    font-size: 16px;
  }
  
  .contact-form textarea {
    height: 120px;
  }
  
  /* Responsive Design */
  @media (max-width: 767px) {
    .contact-container {
      flex-direction: column;
    }
  
    .contact-info, .contact-form {
      padding: 10px;
    }
  
    .contact-form input, .contact-form textarea {
      font-size: 14px;
    }
  
    .contact-form textarea {
      height: 100px;
    }
  }
  
  @media (min-width: 768px) and (max-width: 991px) {
    .contact-container {
      flex-direction: column;
    }
  
    .contact-info, .contact-form {
      padding: 15px;
    }
  
    .contact-form input, .contact-form textarea {
      font-size: 15px;
    }
  }
  
  @media (min-width: 1024px) {
    .contact-container {
      flex-direction: row;
      gap: 40px;
    }
  
    .contact-info, .contact-form {
      flex: 1;
      max-width: calc(50% - 20px);
    }
  }
  
  @media (min-width: 1440px) {
    .contact-container {
      gap: 40px;
    }
  
    .contact-info, .contact-form {
      flex: 1;
      max-width: calc(50% - 20px);
    }
  }
  
  
  </style>