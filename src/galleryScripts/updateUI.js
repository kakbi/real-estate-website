import { setupPagination } from './pagination.js';
import { renderCards } from './render.js';

export function updateUI(
    filteredData,
    currentPage,
    itemsPerPage,
    visibleItemsCount,
    loadMoreButton,
    openGallery,
    setCurrentPage,
    setVisibleItemsCount,
    setTotalPages,
    shouldScroll = true
) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(
        startIndex + visibleItemsCount,
        filteredData.length
    );
    const calculatedTotalPages = Math.ceil(filteredData.length / itemsPerPage);

    const propertyList = document.getElementById('property-list');
    propertyList.innerHTML = '';

    if (filteredData.length === 0) {
        propertyList.innerHTML = `<h2 class="no-results">Sorry, no matches found...</h2>`;
        document.getElementById('pagination').style.display = 'none';
        loadMoreButton.style.display = 'none';
        const allViewedMessage = document.getElementById('all-viewed-message');
        allViewedMessage.style.display = 'none';
        return;
    }

    if (visibleItemsCount >= filteredData.length) {
        setTotalPages(1);
        setCurrentPage(1);
    } else {
        setTotalPages(calculatedTotalPages);
        if (currentPage > calculatedTotalPages) {
            setCurrentPage(calculatedTotalPages);
        }
    }

    renderCards(filteredData.slice(startIndex, endIndex), openGallery);

    setTotalPages(calculatedTotalPages);

    if (currentPage > calculatedTotalPages) {
        setCurrentPage(calculatedTotalPages || 1);
    }

    if (calculatedTotalPages > 1 && visibleItemsCount < filteredData.length) {
        setupPagination(calculatedTotalPages, currentPage, (page) => {
            setCurrentPage(page);
            setVisibleItemsCount(itemsPerPage);
            updateUI(
                filteredData,
                page,
                itemsPerPage,
                visibleItemsCount,
                loadMoreButton,
                openGallery,
                setCurrentPage,
                setVisibleItemsCount,
                setTotalPages
            );
        });
        document.getElementById('pagination').style.display = 'flex';
    } else {
        document.getElementById('pagination').style.display = 'none';
    }

    loadMoreButton.style.display =
        endIndex < filteredData.length ? 'block' : 'none';

    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled =
        currentPage === calculatedTotalPages ||
        visibleItemsCount >= filteredData.length;

    const allViewedMessage = document.getElementById('all-viewed-message');
    if (visibleItemsCount >= filteredData.length) {
        allViewedMessage.style.display = 'block';
    } else {
        allViewedMessage.style.display = 'none';
    }

    if (shouldScroll) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
