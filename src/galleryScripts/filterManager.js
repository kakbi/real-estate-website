import { filterAndSortItems } from './filterSort.js';

export function getFilters() {
    return {
        type:
            document.querySelector('input[name="type"]:checked')?.value || null,
        minPrice:
            parseFloat(document.getElementById('min-price').value) || null,
        maxPrice:
            parseFloat(document.getElementById('max-price').value) || null,
        minSize: parseFloat(document.getElementById('min-size').value) || null,
        maxSize: parseFloat(document.getElementById('max-size').value) || null,
    };
}

export function applyFiltersAndSort(
    data,
    setFilteredData,
    setCurrentPage,
    updateUI
) {
    const query = document.getElementById('search').value;
    const filters = getFilters();
    const sortOption = document.getElementById('sort-select').value;

    const filtered = filterAndSortItems(data, query, filters, sortOption);
    setFilteredData(filtered);
    setCurrentPage(1);
    updateUI();
}
