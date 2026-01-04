export function searchItems(data, query) {
    const normalizedQuery = query.toLowerCase().replace(/\s+/g, '');

    return data.filter((item) => {
        const searchableFields = [
            item.title,
            item.type,
            item.location.address,
            item.location.city,
            item.location.district,
            ...item.amenities,
        ]
            .join(' ')
            .toLowerCase()
            .replace(/\s+/g, '');

        return searchableFields.includes(normalizedQuery);
    });
}
