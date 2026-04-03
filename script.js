document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to my website!');
    
    // Add click event to navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('You clicked on:', this.textContent);
        });
    });
    
    // Add hover effect to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f9f9f9';
        });
        section.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
        });
    });
    
    // Show alert when page loads
    console.log('Page loaded successfully!');
});