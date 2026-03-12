const messages = [
    "Eres mi persona favorita ✨",
    "Gracias por llegar a mi vida ❤️",
    "Cada momento contigo es mágico",
    "Te amo muchísimo 💖",
    "Tú y yo, para siempre",
    "Tu sonrisa me ilumina 🌟",
    "Mi corazón es tuyo",
    "Siempre pienso en ti",
    "Eres lo mejor que me ha pasado",
    "Juntos por siempre ♾️"
];

function createBubble() {
    const container = document.getElementById('bubbles-container');
    const bubble = document.createElement('div');
    
    bubble.className = 'text-bubble';
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];
    
    // Posición horizontal aleatoria
    const sectionWidth = 100 / 10; 
    bubble.style.left = Math.random() * 90 + 'vw';
    
    // Duración de la animación aleatoria
    const duration = Math.random() * 5 + 5; // Entre 5 y 10 segundos
    bubble.style.animationDuration = duration + 's';
    
    container.appendChild(bubble);
    
    // Limpiar el DOM eliminando la burbuja después de que termine
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}

// Crear una burbuja nueva cada 800ms
setInterval(createBubble, 800);