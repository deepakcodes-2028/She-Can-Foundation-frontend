
document.addEventListener('DOMContentLoaded', () => {

  // --- Element Selection ---
  const volunteerBtn = document.getElementById('volunteer-btn');
  const heroCtaBtn = document.getElementById('hero-cta-btn');
  const navVolunteerBtn = document.getElementById('nav-volunteer-btn');
  const contactForm = document.getElementById('main-contact-form');

  // --- Volunteer Button Handler ---
  // Tells users to scroll to contact form or fills out details
  const handleVolunteerClick = () => {
    alert("Thank you for your interest in volunteering! Please fill out the contact form at the bottom of the page, and our team will email you the registration details.");
    
    // Smooth scroll down to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Attach click listeners to all volunteer buttons
  if (volunteerBtn) {
    volunteerBtn.addEventListener('click', handleVolunteerClick);
  }
  if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', handleVolunteerClick);
  }
  if (navVolunteerBtn) {
    navVolunteerBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent standard hashtag link jumps
      handleVolunteerClick();
    });
  }

  // --- Contact Form Submission Handler ---
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form reload behavior

      // Extract form input values
      const userName = document.getElementById('user-name').value.trim();
      const userEmail = document.getElementById('user-email').value.trim();
      const userMessage = document.getElementById('user-message').value.trim();

      // Basic form checking
      if (userName === "" || userEmail === "" || userMessage === "") {
        alert("Please fill out all the fields in the form.");
        return;
      }

      // Display a successful popup response
      alert("Thank you, " + userName + "! Your message has been sent successfully. We will get in touch with you at " + userEmail + " shortly.");
      
      // Reset the form input fields
      contactForm.reset();
    });
  }

});
