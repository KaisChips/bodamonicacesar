document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modalHabitaciones");
    if (modal) {
        modal.style.display = "none";
    }

    const botonesAbrir = document.querySelectorAll(".boton-reserva");
    const cerrarModal = document.querySelector(".cerrar-modal");
    const modalContenido = modal.querySelector('.contenedor-habitaciones'); // Contenedor de las habitaciones

    // Información personalizada para cada hotel
    const infoHoteles = [
        {
            titulo: "Hotel San Ramón",
            habitaciones: [
                { tipo: "Habitación Confort Doble", precio: "108 € / noche", desayuno: "Desayuno incluido" },
                { tipo: "Habitación Superior Doble", precio: "139,50 € / noche", desayuno: "Desayuno incluido" },
                { tipo: "Habitación Junior Suite", precio: "152,10 € / noche", desayuno: "Desayuno incluido" }
            ]
        },
        {
            titulo: "Gran Hotel Ciudad de Barbastro",
            habitaciones: [
                { tipo: "Habitación Doble", precio: "86 € / noche", desayuno: "Desayuno +9,50 € / pers." },
            ]
        },
        {
            titulo: "Hotel Masmonzón",
            habitaciones: [
                { tipo: "Habitación Doble Clásica", precio: "70,80 € / noche", desayuno: "Desayuno incluido" },
            ]
        },
        {
            titulo: "Hotel Mi Casa en Barbastro",
            habitaciones: [
                { tipo: "Habitación Doble", precio: "77 € / noche", desayuno: "Desayuno +8,80 € / pers." },
            ]
        },
        {
            titulo: "Hotel Restaurante Las Acacias",
            habitaciones: [
                { tipo: "Habitación Doble", precio: "78 € / noche", desayuno: "Desayuno incluido" },
            ]
        },
        {
            titulo: "Hostelería 3 Caminos",
            habitaciones: [
                { tipo: "Habitación Doble", precio: "TBC / noche", desayuno: "" },
            ]
        },
    ];

    // Abrir el modal al hacer clic en cualquier botón de "Consultar disponibilidad"
    botonesAbrir.forEach((boton, index) => {
        boton.addEventListener("click", function () {
            const hotelInfo = infoHoteles[index]; // Selecciona el hotel según el botón presionado

            // Actualiza el contenido del modal dinámicamente
            if (hotelInfo) {
                modal.querySelector('h2').textContent = `Habitaciones en ${hotelInfo.titulo}`;
                modalContenido.innerHTML = ''; // Limpia el contenido anterior

                hotelInfo.habitaciones.forEach(habitacion => {
                    const div = document.createElement('div');
                    div.classList.add('habitacion');
                    div.innerHTML = `
                        <h3>${habitacion.tipo}</h3>
                        <p class="precio">${habitacion.precio}</p>
                        <span class="texto-pequeño">${habitacion.desayuno}</span>
                    `;
                    modalContenido.appendChild(div);
                });
            }

            modal.style.display = "block"; // Muestra el modal
        });
    });

    // Cerrar el modal al hacer clic en la "X"
    cerrarModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
