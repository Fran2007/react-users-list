import { UserRow } from './UserRow';

export const UserListRows = ({ users }) => {
	if (!users.length) {
		return <p>No hay usuarios</p>;
	}

	return users.map((user) => <UserRow key={user.id} {...user} />);
};
