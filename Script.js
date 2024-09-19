
// Select DOM items
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

// Toggle navigation on burger click
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Smooth scrolling logic
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scroll({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Dynamic navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.7)';
    }
});

