import { useState } from 'react';
import { SORT_OPTIONS } from '../Constants/sortOptions';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFAULT,
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
		const newSortBy =
			onlyActive && filters.sortBy === SORT_OPTIONS.ACTIVE
				? SORT_OPTIONS.DEFAULT
				: filters.sortBy;

		setFilters({
			...filters,
			sortBy: newSortBy,
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
