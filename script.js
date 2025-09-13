        function createParticles() {
            const particlesContainer = document.querySelector('.particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 4 + 2;
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                const animationDelay = Math.random() * 6;
                const animationDuration = Math.random() * 3 + 6;

                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${x}px`;
                particle.style.top = `${y}px`;
                particle.style.animationDelay = `${animationDelay}s`;
                particle.style.animationDuration = `${animationDuration}s`;

                particlesContainer.appendChild(particle);
            }
        }

        // Navbar scroll effect
        function handleNavbarScroll() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        // Smooth scroll for navigation links
        function setupSmoothScroll() {
            document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
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
        }

        // Intersection Observer for animations
        function setupAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.section').forEach(section => {
                observer.observe(section);
            });
        }

        // Download CV function
        function downloadCV() {
            // You can replace this with your actual CV file path
            const link = document.createElement('a');
            link.href = '#'; // Replace with your CV file path
            link.download = 'Osama_Matter_CV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            createParticles();
            setupSmoothScroll();
            setupAnimations();
            
            // Add scroll event listener
            window.addEventListener('scroll', handleNavbarScroll);
            
            // Initial check for navbar
            handleNavbarScroll();
        });

        // Handle window resize for particles
        window.addEventListener('resize', function() {
            const particlesContainer = document.querySelector('.particles');
            particlesContainer.innerHTML = '';
            createParticles();
        });