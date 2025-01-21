// Selección de elementos
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Evento para alternar el menú al hacer clic
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Evento para mostrar el menú al pasar el ratón por encima del logo
menuToggle.addEventListener('mouseover', () => {
    menu.classList.add('show');
});

// Evento para ocultar el menú al sacar el ratón del logo
menuToggle.addEventListener('mouseout', () => {
    menu.classList.remove('show');
});

// Asegurar que el menú se oculte al hacer clic fuera de él (dispositivos pequeños)
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
    }
});

// Asegurar que los enlaces dentro del menú permitan la navegación
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show'); // Ocultar el menú después de hacer clic en un enlace
    });
});
