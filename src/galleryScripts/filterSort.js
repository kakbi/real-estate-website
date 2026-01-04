export function filterAndSortItems(items, query, filters, sortOption) {
    let filtered = items.filter((item) => {
        const searchableFields = `${item.title} ${item.type} ${
            item.location.city
        } ${item.location.district} ${
            item.location.address
        } ${item.amenities.join(' ')}`
            .toLowerCase()
            .replace(/\s+/g, '');
        return searchableFields.includes(
            query.toLowerCase().replace(/\s+/g, '')
        );
    });

    if (filters.type) {
        filtered = filtered.filter((item) => item.type === filters.type);
    }

    if (filters.minPrice !== null) {
        filtered = filtered.filter((item) => item.price >= filters.minPrice);
    }

    if (filters.maxPrice !== null) {
        filtered = filtered.filter((item) => item.price <= filters.maxPrice);
    }

    if (filters.minSize !== null) {
        filtered = filtered.filter((item) => item.size >= filters.minSize);
    }

    if (filters.maxSize !== null) {
        filtered = filtered.filter((item) => item.size <= filters.maxSize);
    }

    switch (sortOption) {
        case 'priceAsc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'priceDesc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'sizeAsc':
            filtered.sort((a, b) => a.size - b.size);
            break;
        case 'sizeDesc':
            filtered.sort((a, b) => b.size - a.size);
            break;
    }

    return filtered;
}
