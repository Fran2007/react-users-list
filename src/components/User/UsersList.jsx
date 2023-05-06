import { useUser } from '../../Hooks/useUser';
import { useFilters } from '../../Hooks/useFilters';
import { UsersListFilters } from './UsersListFilters';
import { UserListRows } from './UserListRows';
import style from './UserList.module.css';
import { UserContext } from '../../lib/Context/UsersContext';

const UserList = ({ initialUsers }) => {
	const { search, onlyActive, sortBy, ...setFiltersFunction } = useFilters();

	const { users, toggleUserActive } = useUser(initialUsers);

	let usersFiltered = filterActiveUsers(users, onlyActive);
	usersFiltered = filterUsersByName(usersFiltered, search);
	usersFiltered = sortUsers(usersFiltered, sortBy);

	return (
		<div className={style.wrapper}>
			<h1>Listado de usuario</h1>
			<UsersListFilters
				search={search}
				onlyActive={onlyActive}
				sortBy={sortBy}
				{...setFiltersFunction}
			/>
			<UserContext.Provider value={{ toggleUserActive }}>
				<UserListRows
					users={usersFiltered}
					toggleUserActive={toggleUserActive}
				/>
			</UserContext.Provider>
		</div>
	);
};

const filterUsersByName = (users, search) => {
	if (!search) {
		return [...users];
	}

	const lowerCaseSearch = search.toLowerCase();

	return users.filter((user) =>
		user.name.toLowerCase().startsWith(lowerCaseSearch)
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
		default:
			return users;
	}
};

export default UserList;
