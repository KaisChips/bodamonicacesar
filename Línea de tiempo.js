document.addEventListener('DOMContentLoaded', () => {
    const timelineEvents = document.querySelectorAll('.timeline-event');

    // Añade un efecto de desplazamiento para revelar los eventos
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    timelineEvents.forEach(event => {
        observer.observe(event);
    });

    // Añade interactividad al pasar el ratón
    timelineEvents.forEach(event => {
        event.addEventListener('mouseenter', () => {
            event.style.backgroundColor = '#e9ecef';
            event.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.2)';
        });

        event.addEventListener('mouseleave', () => {
            event.style.backgroundColor = '#fff';
            event.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
});
