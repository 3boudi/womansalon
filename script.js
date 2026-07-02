/* ==========================================================================
   Maison de Beauté - Interactivity & Visual Effects Script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile Menu Drawer Navigation --- */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMenu = () => {
        const isOpen = mobileDrawer.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
        document.body.style.overflow = isOpen ? 'hidden' : ''; // Disable background scroll when open
    };

    hamburgerBtn.addEventListener('click', toggleMenu);

    // Close menu drawer when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) {
                toggleMenu();
            }
        });
    });


    /* --- 2. Sticky Header Scroll Indicator & Active Link State --- */
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Sticky Header Elevation
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(244, 247, 244, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(32, 38, 35, 0.03)';
        } else {
            header.style.backgroundColor = 'rgba(244, 247, 244, 0.9)';
            header.style.boxShadow = 'none';
        }

        // Active Navigation Highlight
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120; // Offset for header height
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });


    /* --- 3. Intersection Observer for Scroll Reveals --- */
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal once only
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Slightly offset triggers for natural rhythm
    });

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });


    /* --- 4. FAQ Accordion Toggle --- */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        
        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            // Close all items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('open');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // If not open, open clicked item
            if (!isOpen) {
                item.classList.add('open');
                const answer = item.querySelector('.faq-answer');
                // Calculate precise height for smooth transition
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
    /* --- 5. Floating WhatsApp Button Scroll Trigger --- */
    const floatingWhatsapp = document.getElementById('floatingWhatsapp');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            floatingWhatsapp.classList.add('visible');
        } else {
            floatingWhatsapp.classList.remove('visible');
        }
    });

});
