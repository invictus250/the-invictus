document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById('contact-form');
    const loginForm = document.getElementById('login');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Contact form submitted!');
        // Handle contact form submission logic here
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login form submitted!');
        // Handle login form submission logic here
    });
});
document.querySelectorAll('.video-link').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Redirecting to:', link.href);
    });
});