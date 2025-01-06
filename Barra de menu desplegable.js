// Selección de elementos
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Evento para alternar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});