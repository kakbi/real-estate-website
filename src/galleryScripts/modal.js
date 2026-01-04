let currentImages = [];
let currentIndex = 0;

export function openGallery(imgElement, index) {
    const card = imgElement.closest('.property-card');
    currentImages = Array.from(
        card.querySelectorAll('.property-images img')
    ).map((img) => img.src);
    currentIndex = index;

    document.getElementById('modal-img').src = currentImages[currentIndex];
    document.getElementById('image-modal').style.display = 'flex';

    document.addEventListener('keydown', handleKeyPress);
}

export function changeImage(direction) {
    currentIndex =
        (currentIndex + direction + currentImages.length) %
        currentImages.length;
    document.getElementById('modal-img').src = currentImages[currentIndex];
}

export function closeGallery() {
    document.getElementById('image-modal').style.display = 'none';
    document.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'Escape') {
        closeGallery();
    }
}

document.getElementById('modal-close').addEventListener('click', closeGallery);
document
    .getElementById('modal-next')
    .addEventListener('click', () => changeImage(1));
document
    .getElementById('modal-prev')
    .addEventListener('click', () => changeImage(-1));
