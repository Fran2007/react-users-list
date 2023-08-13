import { useState } from 'react';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: 0,
	});

	const setSearch = (search) =>
		setFilters({
			...filters,
			search,
		});

	const setSortBy = (sortBy) =>
		setFilters({
			...filters,
			sortBy,
		});

	const setOnlyActive = (onlyActive) => {
		if (onlyActive && filters.sortBy === 3)
			setFilters({
				...filters,
				sortBy: 0,
				onlyActive,
			});
		else
			setFilters({
				...filters,
				onlyActive,
			});
	};

	return {
		...filters,
		setSearch,
		setOnlyActive,
		setSortBy,
	};
};
