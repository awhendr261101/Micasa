<template>
  <div class="about">
    <div class="about-background">
      <div id="about" class="padding-large">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8">
              <div class="about-card">
                <h1>About Us</h1>
                <h3 class="py-3">MiCasa is a leading home décor company offering a curated selection of stylish furniture and accessories. Known for quality craftsmanship and modern design, MiCasa helps you create personalized, elegant spaces. With expert design services and a wide range of products, MiCasa makes it easy to transform your home into a cozy, beautiful haven.</h3>
                <p>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique facilisis consectetur at vivamus ut porta porta. Ut nisl, tortor, aliquam blandit vitae vehicula vivamus leo nullam urna, scelerisque unc lectus phasellus adipiscing arcu. Tristique facilisis nunc consectetur at tempor cursusut porta.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="additional-info">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <!-- Additional information content goes here -->
            <h4>Additional Information</h4>
            <p>Additional details or content that you want to add below the About Us section.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Section styling */
.about-background {
  background-image: url('https://jords-springy.github.io/hostedimages/images/about.jpg'); /* Replace with your background image URL */
  background-size: cover;
  background-position: center;
  padding: 60px 0;
  position: relative;
}

#about {
  padding: 120px 0;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  justify-content: center;
}

.title-accent {
  color: #333;
  font-weight: bold;
  display: block;
}

h3 {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.about-card {
  background-color: rgba(255, 255, 255, 0.8); /* White background with opacity */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.padding-large {
  padding: 80px 0;
}

.additional-info {
  padding: 40px 0;
  background-color: #f8f9fa;
}

.additional-info h4 {
  font-size: 24px;
  color: #333;
}

.additional-info p {
  font-size: 16px;
  color: #555;
}

@media (max-width: 768px) {
  h3 {
    font-size: 24px;
  }

  p {
    font-size: 14px;
  }
}
</style>
