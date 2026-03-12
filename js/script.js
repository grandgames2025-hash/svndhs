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

// Form submission handler
document.querySelector('.application-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const discord = document.getElementById('discord').value;
    const position = document.getElementById('position').value;
    const experience = document.getElementById('experience').value;

    // Basic validation
    if (!name || !email || !discord || !position) {
        alert('Please fill in all required fields (marked with *)');
        return;
    }

    // Show success message
    alert(`Thank you for your application, ${name}!\n\nWe have received your submission and will review it shortly.\n\nPosition: ${position}\nDiscord: ${discord}`);

    // Reset form
    this.reset();

    // In a real application, you would send this data to a server
    console.log({
        name: name,
        email: email,
        discord: discord,
        position: position,
        experience: experience,
        submittedAt: new Date().toLocaleString()
    });
});

// Add animation on scroll for division cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe division cards
document.querySelectorAll('.division-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Handle navigation active state
window.addEventListener('scroll', function () {
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle (optional - can be expanded for mobile menu)
console.log('DHS Website loaded successfully');
