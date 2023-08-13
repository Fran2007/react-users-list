import { useFilters } from '../../Hooks/useFilters';
import { UsersListFilters } from './UsersListFilters';
import { UserListRows } from './UserListRows';
import style from './UserList.module.css';
import { useState } from 'react';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunction } = useFilters();

	const { users } = useUser(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>Listado de usuario</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunction}
			/>
			<UserListRows users={usersFiltered} />
		</div>
	);
};

const useUser = (initialUser) => {
	const [users, setUsers] = useState(initialUser);

	return { users };
};

const filterUsersByName = (users, search) => {
	if (!search) {
		return [...users];
	}

	const lowerCaseSearch = search.toLowerCase();

	return users.filter((user) =>
		user.name.toLowerCase().includes(lowerCaseSearch)
	);
};

const filterActiveUsers = (users, active) => {
	if (!active) {
		return [...users];
	}

	return users.filter((user) => user.active);
};

const sortUsers = (users, sortBy) => {
	const sortUsers = [...users];

	switch (sortBy) {
		case 1:
			return sortUsers.sort((a, b) => a.name.localeCompare(b.name));
		case 2:
			return sortUsers.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === 'Teacher') return -1;
				if (a.role === 'Student' && b.role === 'Otro') return -1;
				return 1;
			});
		case 3:
			return sortUsers.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return users;
	}
};

export default UserList;
