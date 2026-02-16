// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Add scrolled class to nav on scroll
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Form handling
const consultationForm = document.getElementById('consultationForm');

if (consultationForm) {
    consultationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(consultationForm);
        const data = Object.fromEntries(formData);
        
        // Log form data (in production, this would send to a server)
        console.log('Consultation Request:', data);
        
        // Show success message
        alert(`Thank you for your interest! We'll contact you soon at ${data.email} to schedule your consultation.`);
        
        // Reset form
        consultationForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.treatment-card, .trust-item, .why-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add stagger effect to treatment cards
document.querySelectorAll('.treatment-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Add hover effect to treatment cards
document.querySelectorAll('.treatment-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Parallax effect for hero ornament
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const ornament = document.querySelector('.hero-ornament');
    
    if (ornament && scrolled < window.innerHeight) {
        ornament.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Form validation styling
const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() !== '') {
            this.style.borderColor = 'var(--color-rose-gold)';
        } else if (this.hasAttribute('required')) {
            this.style.borderColor = 'var(--color-light-gray)';
        }
    });
    
    input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--color-rose-gold)';
    });
});

// Lazy load placeholder images
const placeholders = document.querySelectorAll('.ba-placeholder');

const lazyLoadObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
        }
    });
});

placeholders.forEach(placeholder => {
    lazyLoadObserver.observe(placeholder);
});

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.type === 'submit') {
            const originalText = this.textContent;
            this.textContent = 'Processing...';
            this.style.opacity = '0.7';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.opacity = '1';
                this.style.pointerEvents = 'auto';
            }, 2000);
        }
    });
});

// Console message
console.log('%cLumière Aesthetics', 'font-size: 24px; color: #B76E79; font-weight: bold;');
console.log('%cDemo website - Natural Results. Expert Care. Confident You.', 'font-size: 14px; color: #6B6B6B;');