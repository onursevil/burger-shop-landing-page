let navLinks = document.getElementById('nav-links');

document.getElementById('hamburger').addEventListener('click', function() {
  if (navLinks.style.display === 'none') {
    navLinks.style.display = 'block';
  } else {
    navLinks.style.display = 'none';
  }
});
