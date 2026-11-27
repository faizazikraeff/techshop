// Form kontak. Belum ada backend, jadi pesan hanya disimpan di localStorage.
const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const message = {
    name: document.getElementById("c-name").value,
    email: document.getElementById("c-email").value,
    text: document.getElementById("c-message").value,
    date: new Date().toISOString()
  };

  const messages = JSON.parse(localStorage.getItem("techshop-messages") || "[]");
  messages.push(message);
  localStorage.setItem("techshop-messages", JSON.stringify(messages));

  contactForm.reset();
  contactSuccess.hidden = false;
});
