let currentImages = [];
let currentIndex = 0;

export function openGallery(images, index) {
    currentImages = images;
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
window.closeGallery = closeGallery;
window.changeImage = changeImage;

export function handleGalleryEvents() {
    document.body.addEventListener('click', (event) => {
        const action = event.target.dataset.action;
        if (action === 'closeGallery') {
            closeGallery();
        } else if (action === 'changeImage') {
            const step = Number(event.target.dataset.step);
            changeImage(step);
        }
    });
}
