import style from './UserRole.module.css';
import { USER_ROLES } from '../../Constants/UserRoles';

const ROLE_STYLES = {
	[USER_ROLES.TEACHER]: ['profesor', style.teacher],
	[USER_ROLES.STUDENT]: ['student', style.student],
	[USER_ROLES.OTHER]: ['otro', style.other],
};

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.Other;

	return <span className={`${style.role} ${roleClassName}`}>{roleName}</span>;
};
export default UserRole;
