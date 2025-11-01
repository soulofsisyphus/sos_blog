<?php include "includes/header.php" ?>


  <!-- 💫 Contact Section -->
  <section class="contact-section">
    <h2>Get in <span class="neon">Touch</span></h2>
    <p class="contact-intro">
      Have a project idea, collaboration, or just want to say hi?  
      Fill out the form below — I’ll open your email app ready to send.
    </p>

    <form id="contactForm" class="contact-form">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
      </div>

      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
      </div>

      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Subject" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message..." required></textarea>
      </div>

      <button type="submit" class="btn-glow">Send Message</button>
    </form>
  </section>

  <!-- 🌟 Thank You Modal -->
  <div id="thankYouModal" class="modal">
    <div class="modal-content">
      <h3>✨ Thank you, <span id="modalName">Friend</span>!</h3>
      <p>Your message is ready to send — opening your email app...</p>
      <div class="loading-spinner"></div>
    </div>
  </div>

  <!-- 🌙 Footer -->
<?php include "includes/footer.php" ?>