// Selección de elementos
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Evento para alternar el menú al hacer clic
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Evento para mostrar el menú al pasar el ratón por encima del logo
menuToggle.addEventListener('mouseover', () => {
    menu.classList.add('show');
});

// Evento para ocultar el menú al sacar el ratón del logo o del menú
menuToggle.addEventListener('mouseout', () => {
    menu.classList.remove('show');
});
// Evento para mostrar el menú al hacer clic en el logo (dispositivos pequeños)
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Asegurar que el menú se oculte al hacer clic fuera de él (dispositivos pequeños)
document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('show');
    }
});
