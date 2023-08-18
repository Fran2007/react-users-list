import { USER_ROLES } from "../../../Constants/UserRoles";
import { SORT_OPTIONS } from "../../../Constants/sortOptions";

export const filterUsersByName = (users, search) => {
	if (!search) {
		return [...users];
	}

	const lowerCaseSearch = search.toLowerCase();

	return users.filter((user) =>
		user.name.toLowerCase().includes(lowerCaseSearch)
	);
};

export const filterActiveUsers = (users, active) => {
	if (!active) {
		return [...users];
	}

	return users.filter((user) => user.active);
};

export const sortUsers = (users, sortBy) => {
	const sortUsers = [...users];

	switch (sortBy) {
		case SORT_OPTIONS.NAME:
			return sortUsers.sort((a, b) => a.name.localeCompare(b.name));
		case SORT_OPTIONS.ROLE:
			return sortUsers.sort((a, b) => {
				if (a.role === b.role) return 0;
				if (a.role === USER_ROLES.TEACHER) return -1;
				if (a.role === USER_ROLES.STUDENT && b.role === USER_ROLES.OTHER)
					return -1;
				return 1;
			});
		case SORT_OPTIONS.ACTIVE:
			return sortUsers.sort((a, b) => {
				if (a.active === b.active) return 0;
				if (a.active && !b.active) return -1;
				return 1;
			});
		default:
			return users;
	}
};
