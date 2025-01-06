// Obtener elementos del slider
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
let autoSlideInterval;

// Función para reiniciar el temporizador de cambio automático
function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Detener el temporizador actual
    autoSlideInterval = setInterval(() => {
        const nextIndex = (currentIndex + 1) % images.length;
        showImage(nextIndex);
    }, 3000); // Reiniciar el temporizador de 3 segundos
}

// Configurar las imágenes para que se ajusten al contenedor y estén centradas
images.forEach((image) => {
    image.style.position = "absolute";
    image.style.top = "50%";
    image.style.left = "50%";
    image.style.transform = "translate(-50%, -50%)"; // Centrar las imágenes
    image.style.objectFit = "contain"; // Asegura que la imagen siempre esté completamente visible
    image.style.width = "auto";
    image.style.height = "auto";
    image.style.maxWidth = "100%";
    image.style.maxHeight = "100%";
    image.style.transition = "opacity 1s ease"; // Solo animación de opacidad
    image.style.opacity = "0"; // Ocultar imágenes inicialmente
    image.style.zIndex = "-1"; // Asegura que solo la imagen activa esté encima
});

// Activar la primera imagen al inicio
images[currentIndex].style.opacity = "1";
images[currentIndex].style.zIndex = "1";

// Configurar las flechas para que estén siempre por encima de las imágenes y separadas
prevButton.style.position = "absolute";
nextButton.style.position = "absolute";
prevButton.style.top = "50%";
nextButton.style.top = "50%";
prevButton.style.right = "10px"; // Separar la flecha derecha (ahora está a la derecha)
nextButton.style.left = "10px"; // Separar la flecha izquierda (ahora está a la izquierda)
prevButton.style.transform = "translateY(-50%)"; // Centrar las flechas verticalmente
nextButton.style.transform = "translateY(-50%)"; // Centrar las flechas verticalmente
prevButton.style.zIndex = "2"; // Asegura que las flechas estén por encima de las imágenes
nextButton.style.zIndex = "2"; // Asegura que las flechas estén por encima de las imágenes

// Función para mostrar una imagen específica con transición de opacidad
function showImage(index) {
    const previousIndex = currentIndex;
    currentIndex = index;

    // Ocultar la imagen anterior con opacidad
    images[previousIndex].style.opacity = "0"; // Desaparecer con difuminado
    images[previousIndex].style.zIndex = "-1"; // Colocar la imagen detrás

    // Mostrar la nueva imagen con opacidad
    images[currentIndex].style.opacity = "1"; // Hacerla visible
    images[currentIndex].style.zIndex = "1"; // Colocar la imagen delante
}

// Evento para botón anterior
prevButton.addEventListener("click", () => {
    const nextIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(nextIndex);
    resetAutoSlide(); // Reiniciar el temporizador de cambio automático
});

// Evento para botón siguiente
nextButton.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
    resetAutoSlide(); // Reiniciar el temporizador de cambio automático
});

// Cambio automático cada 3 segundos
resetAutoSlide(); // Iniciar el cambio automático
