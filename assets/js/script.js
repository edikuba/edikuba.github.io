document.addEventListener("DOMContentLoaded", function () {
    // Inicialización de partículas.js
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#00f7ff" },
            "shape": { "type": "circle", "polygon": { "nb_sides": 5 } },
            "opacity": { "value": 0.5 },
            "size": { "value": 3, "random": true },
            "line_linked": { "enable": true, "distance": 150, "color": "#00f7ff", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 2, "direction": "none" }
        },
        "interactivity": {
            "events": {
                "onhover": { "enable": true, "mode": "grab" },
                "onclick": { "enable": true, "mode": "push" }
            },
            "modes": {
                "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                "bubble": { "distance": 400, "size": 40, "duration": 2 },
                "repulse": { "distance": 200, "duration": 0.4 }
            }
        },
        "retina_detect": true
    });

    // Efecto de escritura para múltiples elementos con cursor parpadeante
    const elements = document.querySelectorAll(".typing-text");
    elements.forEach(el => {
        const text = el.textContent;
        el.textContent = '';

        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        el.appendChild(cursor);

        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                const char = document.createTextNode(text.charAt(i));
                el.insertBefore(char, cursor);
                i++;
            } else {
                clearInterval(typing);
                cursor.classList.add('blink-caret'); // Añade la clase de parpadeo solo después de completar la escritura
            }
        }, 80);
    });
});
