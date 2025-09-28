
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            if (!name.value || !email.value || !message.value) {
                alert('Please fill out all fields.');
                e.preventDefault();
            }
        });
    }
});
