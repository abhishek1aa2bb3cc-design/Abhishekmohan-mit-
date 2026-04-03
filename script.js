// Dark Mode Toggle Button
const toggleButton = document.createElement('button');
toggleButton.innerText = '🌙 Dark Mode';
toggleButton.style.position = 'fixed';
toggleButton.style.top = '10px';
toggleButton.style.right = '10px';
toggleButton.style.padding = '10px 15px';
toggleButton.style.backgroundColor = '#333';
toggleButton.style.color = 'white';
toggleButton.style.border = 'none';
toggleButton.style.borderRadius = '5px';
toggleButton.style.cursor = 'pointer';
toggleButton.style.zIndex = '1000';
document.body.appendChild(toggleButton);

let isDarkMode = false;
toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = 'white';
        toggleButton.innerText = '☀️ Light Mode';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#333';
        toggleButton.innerText = '🌙 Dark Mode';
    }
});

// Date & Time Display
const dateTimeDisplay = document.createElement('div');
dateTimeDisplay.style.position = 'fixed';
dateTimeDisplay.style.bottom = '10px';
dateTimeDisplay.style.left = '10px';
dateTimeDisplay.style.backgroundColor = '#4CAF50';
dateTimeDisplay.style.color = 'white';
dateTimeDisplay.style.padding = '10px 15px';
dateTimeDisplay.style.borderRadius = '5px';
dateTimeDisplay.style.zIndex = '1000';
dateTimeDisplay.style.fontSize = '14px';
document.body.appendChild(dateTimeDisplay);

function updateDateTime() {
    const now = new Date();
    dateTimeDisplay.innerText = now.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⬆️ Back to Top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '10px';
backToTopButton.style.right = '10px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#4CAF50';
backToTopButton.style.color = 'white';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

console.log('✅ All features loaded successfully!');