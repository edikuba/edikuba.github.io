document.addEventListener("DOMContentLoaded", function () {
    // =============================================
    // 1. PARTICULAS DE FONDO CON particles.js
    // =============================================
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00f7ff" },
            shape: { type: "circle", polygon: { nb_sides: 5 } },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#00f7ff",
                opacity: 0.2,
                width: 1
            },
            move: { enable: true, speed: 2, direction: "none" }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: { opacity: 1 }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });

    // =============================================
    // 2. EFECTO DE ESCRITURA TIPO "TYPING"
    // =============================================
    const elements = document.querySelectorAll(".typing-text");
    elements.forEach(el => {
        const text = el.textContent.trim();
        el.textContent = '';

        const cursor = document.createElement('span');
        cursor.className = 'cursor'; // ¡Ya animado!
        el.appendChild(cursor);

        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
            cursor.insertAdjacentText('beforebegin', text.charAt(i));
            i++;
            } else {
            clearInterval(typing);
            // No hace falta añadir blink-caret, ya lo tiene activo
            }
        }, 80);
    });

    // =============================================
    // 3. INTERACTIVIDAD VISUAL: BOTONES, TIMELINE, BADGE
    // =============================================

    // ---- 3.1. BADGE INTERACTIVO ----
    const badge = document.querySelector('.badge');
    if (badge) {
        badge.addEventListener('mouseenter', function () {
            this.style.background = 'rgba(42, 92, 138, 0.5)';
            this.style.boxShadow = '0 0 15px rgba(74, 144, 226, 0.5)';
        });
        badge.addEventListener('mouseleave', function () {
            this.style.background = 'rgba(42, 92, 138, 0.3)';
            this.style.boxShadow = 'none';
        });
    }

    // ---- 3.2. BOTONES CON FLECHAS ----
    document.querySelectorAll('.btn-container').forEach(btn => {
        btn.addEventListener('mouseenter', function () {
            const arrows = this.querySelectorAll('.btn-flecha');
            arrows.forEach((arrow, index) => {
                arrow.style.transform = 'translateX(5px)';
                arrow.style.opacity = '1';
                arrow.style.transition = `transform 0.3s ease ${index * 0.1}s, opacity 0.2s`;
            });
        });

        btn.addEventListener('mouseleave', function () {
            const arrows = this.querySelectorAll('.btn-flecha');
            arrows.forEach(arrow => {
                arrow.style.transform = 'translateX(0)';
                arrow.style.opacity = '0.7';
            });
        });

        btn.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.98)';
        });

        btn.addEventListener('mouseup', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // ---- 3.3. TIMELINE ANIMADO ----
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateX(10px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 247, 255, 0.2)';
            this.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
});
