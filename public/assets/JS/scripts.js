document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelector('.nav-links');

  navbarToggler.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});

  
  