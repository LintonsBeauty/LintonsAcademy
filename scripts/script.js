document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Basic form validation (you can add more complex validation)
        if (name && email && message) {
            alert('Thank you for your message!');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
