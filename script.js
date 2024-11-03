let zoomLevel = 1;
let fontSize = 16;
let utterance; // Declare utterance variable globally

function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
}

function showSection(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}

// Show the crops section by default on load
document.addEventListener("DOMContentLoaded", function() {
    showSection('crops');

    // Add mouseenter event to stop speech when hovering over the icon
    const speechButton = document.querySelector('button[onclick="readText()"]');
    speechButton.addEventListener('mouseenter', stopSpeech);
});

function zoomIn() {
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
    document.body.style.transformOrigin = 'top left'; // To ensure scaling is from the top left
}

function zoomOut() {
    if (zoomLevel > 0.1) {
        zoomLevel -= 0.1;
        document.body.style.transform = `scale(${zoomLevel})`;
        document.body.style.transformOrigin = 'top left';
    }
}

function readText() {
    const text = document.body.innerText; // Get all text on the page
    utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);

    // Ensure the speech stops if you call readText again
    utterance.onend = () => {
        utterance = null; // Reset utterance after it finishes
    };
}

function stopSpeech() {
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel(); // Stop any ongoing speech
        utterance = null; // Reset the utterance reference
    }
}

function changeFontSize() {
    fontSize += 2; // Increase font size by 2px
    document.body.style.fontSize = `${fontSize}px`;
}
function showMap() {
    // Get the map element
    const map = document.getElementById("map");
    
    // Toggle the display of the map
    if (map.style.display === "none") {
        map.style.display = "block"; // Show the map
    } else {
        map.style.display = "none"; // Hide the map
    }
}

function searchContent() {
    const query = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        const text = section.innerText.toLowerCase();
        section.style.display = text.includes(query) ? 'block' : 'none';
    });
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Por favor, ingresa un nombre de usuario y contraseña válidos.");
    }
}



