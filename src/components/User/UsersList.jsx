import { useFilters } from '../../Hooks/useFilters';
import { UsersListFilters } from './UsersListFilters';
import { UserListRows } from './UserListRows';
import style from './UserList.module.css';
import { useState } from 'react';

import {
	filterActiveUsers,
	filterUsersByName,
	sortUsers,
} from '../../lib/Context/Users/filterUsers';

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

export default UserList;
