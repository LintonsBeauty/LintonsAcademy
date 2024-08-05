// beauty view more button 
document.addEventListener('DOMContentLoaded', function() {
    var viewMoreButtons = document.querySelectorAll('.view-more');
    viewMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action
            var href = this.getAttribute('href');
            setTimeout(function() {
                window.location.href = href;
            }, 300); // 300ms delay for a smooth transition effect
        });
    });
});
