// Load header
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header-placeholder").innerHTML = data;

    // Hamburger menu toggle (only after header is loaded)
    const toggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggle && navLinks) {
      toggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
      });
    }

    // Shrinking navbar on scroll (after header loaded)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (!navbar) return;
      if (window.scrollY > 50) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    });
  })
  .catch(err => console.error("Error loading header:", err));

// Load footer
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;

    // Scroll to top button (only after footer is loaded)
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  })
  .catch(err => console.error("Error loading footer:", err));
