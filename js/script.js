document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const revealSection = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection();

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your message ! I will get back to you soon. (This is a fake contact form)');
            this.reset();
        });
    }
});
