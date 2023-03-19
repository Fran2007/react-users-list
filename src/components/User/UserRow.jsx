import style from './UserRow.module.css';
import UserStatus from './UserStatus';
import UserRole from './UserRole';

const UserRow = ({ name, active, role, ...restProps }) => (
	<div className={style.Wrapped} {...restProps}>
		<div className={style.name}>
			<span>{name}</span>
		</div>
		<UserStatus active={active} />
		<div className={style.role}></div>
		<UserRole role={role} />
	</div>
);

export default UserRow;
