export function initCarousel() {
    const buttons = document.querySelectorAll('[data-carousel-button]');
    const slidesContainer = document.querySelector('[data-slides]');
    const slides = slidesContainer?.children;

    if (!buttons.length || !slides) return;

    let autoSlideInterval;
    let startX = 0;
    let isSwiping = false;

    function changeSlide(offset) {
        const activeSlide = document.querySelector(
            '.carousel__slide[data-active]'
        );
        let newIndex = [...slides].indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slides.length - 1;
        if (newIndex >= slides.length) newIndex = 0;

        activeSlide.removeAttribute('data-active');
        slides[newIndex].setAttribute('data-active', 'true');
    }

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => changeSlide(1), 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            stopAutoSlide();
            changeSlide(button.dataset.carouselButton === 'next' ? 1 : -1);
            startAutoSlide();
        });
    });

    slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isSwiping = true;
        stopAutoSlide();
    });

    slidesContainer.addEventListener('touchmove', (e) => {
        if (!isSwiping) return;
        const moveX = e.touches[0].clientX - startX;

        if (Math.abs(moveX) > 50) {
            changeSlide(moveX < 0 ? 1 : -1);
            isSwiping = false;
            startAutoSlide();
        }
    });

    slidesContainer.addEventListener('touchend', () => {
        isSwiping = false;
    });

    startAutoSlide();
}
