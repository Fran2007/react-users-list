import style from './UserRow.module.css';
import UserStatus from './UserStatus';
import UserRole from './UserRole';
import UserDisplay from './UserDisplay';

const UserRow = ({ username, name, active, role, ...restProps }) => {
	return (
		<div className={style.Wrapped} {...restProps}>
			<div className={style.name}>
				<UserDisplay name={name} username={username} />
			</div>
			<UserStatus active={active} />
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}></div>
		</div>
	);
};

export default UserRow;
