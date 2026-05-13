// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 255, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Add glow effect to elements on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product and case cards
document.querySelectorAll('.product-card, .case-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add interactive hover effects
document.querySelectorAll('.product-card, .case-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Add particle effect to hero section
function createParticle() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = '2px';
    particle.style.height = '2px';
    particle.style.background = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = '0';
    particle.style.zIndex = '2';
    particle.style.pointerEvents = 'none';
    particle.style.borderRadius = '50%';
    particle.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px ${particle.style.background}`;
    
    hero.appendChild(particle);
    
    setTimeout(() => {
        particle.style.transition = 'all 3s ease';
        particle.style.opacity = '0.8';
        particle.style.transform = `translateY(-${Math.random() * 200 + 100}px)`;
    }, 10);
    
    setTimeout(() => {
        particle.remove();
    }, 3000);
}

// Create particles periodically
setInterval(createParticle, 500);

// Add scanline effect
const scanline = document.createElement('div');
scanline.style.position = 'fixed';
scanline.style.top = '0';
scanline.style.left = '0';
scanline.style.right = '0';
scanline.style.height = '2px';
scanline.style.background = 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.5), transparent)';
scanline.style.zIndex = '9999';
scanline.style.pointerEvents = 'none';
document.body.appendChild(scanline);

function animateScanline() {
    let pos = 0;
    setInterval(() => {
        pos = (pos + 1) % window.innerHeight;
        scanline.style.top = pos + 'px';
    }, 20);
}

animateScanline();