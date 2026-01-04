export function renderCards(data, openGalleryCallback) {
    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = '';

    data.forEach((property) => {
        const card = document.createElement('div');
        card.classList.add('property-card');

        const mainImage =
            Array.isArray(property.photos) && property.photos.length > 0
                ? property.photos[0]
                : '../../data/images/house-default.jpg';
        const smallImages =
            Array.isArray(property.photos) && property.photos.length > 1
                ? property.photos.slice(1, 3)
                : [];

        card.innerHTML = `
            <div class="property-images">
                <img src="${mainImage}" loading="lazy" alt="Main Image" class="main-image">
                <div class="small-images">
                    ${smallImages
                        .map(
                            (photo, index) =>
                                `<img src="${photo}" loading="lazy" alt="Small Image ${
                                    index + 1
                                }">`
                        )
                        .join('')}
                </div>
            </div>
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-price">${property.type}</p>
                <p class="property-price">$${property.price.toLocaleString()}</p>
                <p class="property-location">Location: ${
                    property.location.district
                }, ${property.location.city}</p>
                <p class="property-size">Size: ${property.size} m²</p>
                <ul class="property-amenities">
                    ${property.amenities
                        .map((amenity) => `<li>${amenity}</li>`)
                        .join('')}
                </ul>
            </div>
        `;

        card.addEventListener('click', (event) => {
            const clickedImage = event.target.closest('img');
            if (!clickedImage) return;

            const allImages = [mainImage, ...smallImages];

            const clickedSrc = decodeURIComponent(
                clickedImage.src.split('/').pop()
            );
            const normalizedImages = allImages.map((img) =>
                decodeURIComponent(img.split('/').pop())
            );

            const clickedIndex = normalizedImages.indexOf(clickedSrc);

            if (clickedIndex !== -1) {
                openGalleryCallback(allImages, clickedIndex);
            }
        });

        propertyList.appendChild(card);
    });
}
