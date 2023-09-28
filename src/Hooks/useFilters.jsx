import { useState } from 'react';
import { SORT_OPTIONS } from '../Constants/sortOptions';

export const useFilters = () => {
	const [filters, setFilters] = useState({
		search: '',
		onlyActive: false,
		sortBy: SORT_OPTIONS.DEFAULT,
		page: 1,
		itemsForPages: 2,
	});

	const setSearch = (search) =>
		setFilters({
			...filters,
			page: 1,
			search,
		});

	const setSortBy = (sortBy) =>
		setFilters({
			...filters,
			page: 1,
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
			page: 1,
			onlyActive,
		});
	};

	const setPage = (newPage) => {
		setFilters({
			...filters,
			page: newPage,
		});
	};

	const setItemsForPages = (itemsForPages) => {
		setFilters({
			...filters,
			page: itemsForPages,
		});
	};

	return {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsForPages,
	};
};
