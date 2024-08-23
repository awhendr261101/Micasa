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
  /* Base styles (mobile-first approach) */
.contact {
    padding: 10px;
}

.contact-header h1 {
    font-size: 24px;
    text-align: center;
}

.contact-container {
    display: flex;
    flex-direction: column;
}

.contact-info, .contact-form {
    margin-bottom: 20px;
}

.contact-info h3, .contact-info h4 {
    margin: 10px 0;
}

.contact-info p {
    line-height: 1.5;
}

.contact-form {
    padding: 10px;
}

.contact-form label {
    display: block;
    margin: 10px 0 5px;
}

.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}

.contact-form button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
}

/* Media queries for different screen sizes */
/* For very small screens (min-width: 300px) */
@media (min-width: 300px) {
    .contact-form input, .contact-form textarea {
        padding: 12px;
        font-size: 14px; /* Maintain smaller font size for very small screens */
    }

    .contact-form textarea {
        height: 100px; /* Ensure height is adequate for small screens */
    }
}
/* For tablets and small desktops (min-width: 768px) */
@media (min-width: 768px) {
    .contact-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .contact-info, .contact-form {
        flex: 1;
        margin: 10px;
    }

    .contact-info {
        margin-right: 20px;
    }

    .contact-header h1 {
        font-size: 30px;
    }

    .contact-form input, .contact-form textarea {
        padding: 12px;
    }

    .contact-form button {
        padding: 12px 25px;
    }
}

/* For larger desktops (min-width: 1024px) */
@media (min-width: 1024px) {
    .contact-header h1 {
        font-size: 36px;
    }

    .contact-info, .contact-form {
        margin: 20px;
    }

    .contact-info h3 {
        font-size: 24px;
    }

    .contact-info h4 {
        font-size: 20px;
    }

    .contact-form input, .contact-form textarea {
        padding: 15px;
    }

    .contact-form button {
        padding: 15px 30px;
    }
}

/* For extra-large screens (min-width: 1440px) */
@media (min-width: 1440px) {
    .contact-header h1 {
        font-size: 40px;
    }

    .contact-info, .contact-form {
        margin: 30px;
    }

    .contact-info h3 {
        font-size: 28px;
    }

    .contact-info h4 {
        font-size: 24px;
    }

    .contact-form input, .contact-form textarea {
        padding: 18px;
    }

    .contact-form button {
        padding: 18px 35px;
    }
}

/* Base styles (mobile-first approach) */
.contact-form input, .contact-form textarea {
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    box-sizing: border-box; /* Ensures padding and border are included in the element's total width and height */
}

.contact-form textarea {
    height: 150px; /* Adjust height as needed */
    resize: vertical; /* Allows users to resize the textarea vertically */
}

/* Media queries for different screen sizes */

/* For tablets and small desktops (min-width: 768px) */
@media (min-width: 768px) {
    .contact-form input, .contact-form textarea {
        padding: 18px;
    }

    .contact-form textarea {
        height: 200px; /* Increase height for larger screens */
    }
}

/* For larger desktops (min-width: 1024px) */
@media (min-width: 1024px) {
    .contact-form input, .contact-form textarea {
        padding: 20px;
    }

    .contact-form textarea {
        height: 250px; /* Further increase height for even larger screens */
    }
}

/* For extra-large screens (min-width: 1440px) */
@media (min-width: 1440px) {
    .contact-form input, .contact-form textarea {
        padding: 22px;
    }

    .contact-form textarea {
        height: 300px; /* Adjust height as needed for very large screens */
    }
}


  </style>