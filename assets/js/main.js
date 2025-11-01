const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuToggle.innerHTML = navLinks.classList.contains('open') ? '&times;' : '&#9776;';
});
