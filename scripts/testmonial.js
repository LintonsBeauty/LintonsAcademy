// You can add any interactive features or dynamic content here
// For example, you might want to add a testimonial slider or form validation

// Example: Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonial = 0;

function showNextTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    testimonials[currentTestimonial].style.display = 'block';
}

// Automatically switch testimonials every 5 seconds
setInterval(showNextTestimonial, 5000);

// Initially hide all but the first testimonial
for (let i = 1; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
}