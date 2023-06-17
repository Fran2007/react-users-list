import { useState } from 'react';

export const useUser = (initialUsers) => {
	const [users, setUsers] = useState(initialUsers);

	const toggleUserActive = (userId) => {
		const newUsers = [...users];
		const userIndex = newUsers.findIndex((user) => user.id === userId);
		if (userIndex === -1) return;

		newUsers[userIndex].active = !newUsers[userIndex].active;
		setUsers(newUsers);
	};
	return { users, toggleUserActive };
};
