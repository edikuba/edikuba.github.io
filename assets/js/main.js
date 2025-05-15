document.addEventListener("DOMContentLoaded", function () {
    // =============================================
    // 1. INICIALIZACIÓN DE PARTÍCULAS (FONDO DINÁMICO)
    // =============================================
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

    // =============================================
    // 2. EFECTO TYPING (TEXTO QUE SE ESCRIBE SOLO)
    // =============================================
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
                cursor.classList.add('blink-caret');
            }
        }, 80);
    });

    // =============================================
    // 3. EFECTOS INTERACTIVOS (BOTONES, TIMELINE, BADGE)
    // =============================================
    // ---- 3.1. BADGE "Oferta Grupo Digital" ----
    const badge = document.querySelector('.badge');
    if(badge) {
        badge.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(42, 92, 138, 0.5)';
            this.style.boxShadow = '0 0 15px rgba(74, 144, 226, 0.5)';
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(42, 92, 138, 0.3)';
            this.style.boxShadow = 'none';
        });
    }

    // ---- 3.2. BOTONES (CONTACTO + DESCARGAR) ----
    document.querySelectorAll('.btn-container').forEach(btn => {
        // Efecto hover: Animación de flechas
        btn.addEventListener('mouseenter', function() {
            const arrows = this.querySelectorAll('.btn-flecha');
            arrows.forEach((arrow, index) => {
                arrow.style.transform = 'translateX(5px)';
                arrow.style.opacity = '1';
                arrow.style.transition = `transform 0.3s ease ${index * 0.1}s, opacity 0.2s`;
            });
        });

        btn.addEventListener('mouseleave', function() {
            const arrows = this.querySelectorAll('.btn-flecha');
            arrows.forEach(arrow => {
                arrow.style.transform = 'translateX(0)';
                arrow.style.opacity = '0.7';
            });
        });

        // Efecto click (feedback táctil)
        btn.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        btn.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // ---- 3.3. ITEMS DE TIMELINE ----
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 247, 255, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
});