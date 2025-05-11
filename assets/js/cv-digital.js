document.addEventListener("DOMContentLoaded", function() {
    // Efecto hover para el badge de Grupo Digital
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

    // Acción para el botón de contacto
    const contactBtn = document.querySelector('.btn-container');
    if(contactBtn) {
        contactBtn.addEventListener('click', function() {
            window.location.href = 'mailto:edward.cuesta.baron@gmail.com?subject=Oportunidad%20Grupo%20Digital';
        });

        // Efecto hover adicional para el botón
        contactBtn.addEventListener('mouseenter', function() {
            const arrows = this.querySelectorAll('.btn-flecha');
            arrows.forEach(arrow => {
                arrow.style.transform = 'translateX(5px)';
            });
        });

        contactBtn.addEventListener('mouseleave', function() {
            const arrows = this.querySelectorAll('.btn-flecha');
            arrows.forEach(arrow => {
                arrow.style.transform = 'translateX(0)';
            });
        });
    }

    // Efecto especial para los items de timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 247, 255, 0.2)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
});