  // ✉️ Handle Mailto Redirect with Modal
    const form = document.getElementById("contactForm");
    const modal = document.getElementById("thankYouModal");
    const modalName = document.getElementById("modalName");

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = encodeURIComponent(document.getElementById("name").value);
      const email = encodeURIComponent(document.getElementById("email").value);
      const subject = encodeURIComponent(document.getElementById("subject").value);
      const message = encodeURIComponent(document.getElementById("message").value);

      // 💌 Replace this with your real email
      const yourEmail = "social@soulofsisyphus.life";
      const mailtoLink = `mailto:${yourEmail}?subject=${subject}&body=Hi, I'm ${name} (${email})%0D%0A%0D%0A${message}`;

      // Show Thank You modal
      modalName.textContent = decodeURIComponent(name || "Friend");
      modal.classList.add("show");

      // Wait 2 seconds before redirecting
      setTimeout(() => {
        modal.classList.remove("show");
        window.location.href = mailtoLink;
      }, 2000);
    });