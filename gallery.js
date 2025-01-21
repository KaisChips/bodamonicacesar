document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.close');
    // Asegurarse de que el modal esté oculto al cargar la página 
    modal.style.display = 'none';

    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('.gallery-image').src;
            captionText.innerHTML = `
                <p class="modal-date">${this.querySelector('.gallery-date').textContent}</p>
                <p>${this.querySelector('.gallery-description').innerHTML}</p>
            `;
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
