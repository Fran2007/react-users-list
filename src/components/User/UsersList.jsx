import { useFilters } from '../../Hooks/useFilters';
import style from './UserList.module.css';
import { UserListRows } from './UserListRows';
import { UsersListFilters } from './UsersListFilters';

import {
	filterActiveUsers,
	filterUsersByName,
	paginateUsers,
	sortUsers,
} from '../../lib/Context/Users/filterUsers';
import { UserListPagination } from './UserListPagination';

const UserList = ({ initialUsers }) => {
	const {
		filters,
		setSearch,
		setOnlyActive,
		setSortBy,
		setPage,
		setItemsForPages,
	} = useFilters();

	const { users, totalPages } = getUsers(initialUsers, filters);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuario</h1>
			<UsersListFilters
				search={filters.search}
				onlyActive={filters.onlyActive}
				sortBy={filters.sortBy}
				setSearch={setSearch}
				setOnlyActive={setOnlyActive}
				setSortBy={setSortBy}
				setPage={setPage}
			/>
			<UserListRows users={users} />
			<UserListPagination
				page={filters.page}
				itemsForPages={filters.itemsForPages}
				setPage={setPage}
				setItemsForPages={setItemsForPages}
				totalPages={totalPages}
			/>
		</div>
	);
};

const getUsers = (
	initialUser,
	{ search, onlyActive, sortBy, page, itemsForPages }
) => {
	let usersFiltered = filterActiveUsers(initialUser, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	const totalPages = Math.ceil(usersFiltered.length / itemsForPages);

	usersFiltered = paginateUsers(usersFiltered, page, itemsForPages);

	return { users: usersFiltered, totalPages };
};

export default UserList;
