// Selección de elementos
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Evento para alternar el menú al hacer clic en el icono
menuToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Evita que el evento se propague y cierre el menú inmediatamente
    menu.classList.toggle('show');
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('show');
    }
});

// Permitir la navegación y cerrar el menú al hacer clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        menu.classList.remove('show'); // Ocultar el menú después de hacer clic
        // Asegurar que el enlace navegue correctamente
        const href = link.getAttribute('href');
        if (href && href !== "#") {
            window.location.href = href;
        }
    });
});
