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
// Dark Mode Toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = '🌙 Dark Mode';
toggleDarkMode.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

document.body.appendChild(toggleDarkMode);

let isDarkMode = false;

toggleDarkMode.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#ffffff';
        toggleDarkMode.textContent = '☀️ Light Mode';
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#333333';
        toggleDarkMode.textContent = '🌙 Dark Mode';
    }
});
// Display Current Date & Time
const timeDisplay = document.createElement('div');
timeDisplay.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 14px;
`;

document.body.appendChild(timeDisplay);

function updateTime() {
    const now = new Date();
    timeDisplay.textContent = now.toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);
// Welcome Alert
const visitorName = prompt('What is your name?');
if (visitorName) {
    console.log(`Welcome ${visitorName}! 👋`);
    alert(`Hello ${visitorName}! Welcome to my website! 🎉`);
}
// Typing Effect for Heading
const heading = document.querySelector('h1');
const text = heading.textContent;
heading.textContent = '';

let index = 0;

function typeEffect() {
    if (index < text.length) {
        heading.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
});