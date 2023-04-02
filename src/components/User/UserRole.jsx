import style from './UserRole.module.css';

const role_style = {
	Teacher: ['Profesor', style.teacher],
	Student: ['Student', style.student],
	Other: ['Otro', style.other],
};

const UserRole = ({ role }) => {
	const [roleName, roleClassName] = role_style[role] || role_style.Other;

	return <span className={`${style.role} ${roleClassName}`}>{roleName}</span>;
};
export default UserRole;
