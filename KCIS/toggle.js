document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('toggle-btn');
  const navMenu = document.getElementById('nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      navMenu.classList.toggle('active');
      toggleBtn.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        toggleBtn.innerHTML = '☰';
      }
    });
  }
});
