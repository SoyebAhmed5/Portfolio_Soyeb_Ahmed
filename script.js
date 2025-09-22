 // Smooth Scrolling for Navigation
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

        // Scroll-Triggered Animations using Intersection Observer
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));

        // Contact Form Validation and Submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! I\'ll get back to you soon.');
                this.reset(); // Clear form
            } else {
                alert('Please fill in all fields.');
            }
        });

        // Hero Animation (already in CSS, but ensure on load)
        window.addEventListener('load', () => {
            document.querySelector('.hero h1').style.animationDelay = '0s';
            document.querySelector('.hero p').style.animationDelay = '0.2s';
        });