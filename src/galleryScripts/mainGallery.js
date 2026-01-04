import { fetchData } from '../utils/fetchData.js';
import { openGallery, handleGalleryEvents } from './gallery.js';
import { initMenu } from '../utils/menu.js';
import { initFilter } from '../utils/initFilterMenu.js';
import { updateUI } from './updateUI.js';
import { applyFiltersAndSort } from './filterManager.js';

document.addEventListener('DOMContentLoaded', async () => {
    let data = await fetchData('../data/data.json');
    let filteredData = [...data];

    const itemsPerPage = 10;
    let currentPage = 1;
    let totalPages = 1;
    let visibleItemsCount = itemsPerPage;

    const loadMoreButton = document.getElementById('load-more');

    function setCurrentPage(page) {
        currentPage = page;
    }

    function setVisibleItemsCount(count) {
        visibleItemsCount = count;
    }

    function setFilteredData(newData) {
        filteredData = newData;
    }

    function setTotalPages(pages) {
        totalPages = pages;
    }

    function refreshUI() {
        updateUI(
            filteredData,
            currentPage,
            itemsPerPage,
            visibleItemsCount,
            loadMoreButton,
            openGallery,
            setCurrentPage,
            setVisibleItemsCount,
            setTotalPages
        );
    }

    applyFiltersAndSort(data, setFilteredData, setCurrentPage, refreshUI);

    document
        .getElementById('search')
        .addEventListener('input', () =>
            applyFiltersAndSort(
                data,
                setFilteredData,
                setCurrentPage,
                refreshUI
            )
        );

    document
        .getElementById('sort-select')
        .addEventListener('change', () =>
            applyFiltersAndSort(
                data,
                setFilteredData,
                setCurrentPage,
                refreshUI
            )
        );

    document
        .querySelectorAll('.filter-input')
        .forEach((input) =>
            input.addEventListener('input', () =>
                applyFiltersAndSort(
                    data,
                    setFilteredData,
                    setCurrentPage,
                    refreshUI
                )
            )
        );

    document.getElementById('load-more').addEventListener('click', () => {
        visibleItemsCount += itemsPerPage;
        updateUI(
            filteredData,
            currentPage,
            itemsPerPage,
            visibleItemsCount,
            loadMoreButton,
            openGallery,
            setCurrentPage,
            setVisibleItemsCount,
            setTotalPages,
            false
        );
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setVisibleItemsCount(itemsPerPage);
            refreshUI();
        }
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setVisibleItemsCount(itemsPerPage);
            refreshUI();
        }
    });

    initMenu();
    initFilter();
    handleGalleryEvents();
});
