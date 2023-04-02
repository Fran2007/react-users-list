import { useState } from 'react';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';
import UserRole from './UserRole';

const UserRow = ({ name, active, role, ...restProps }) => {
	const [isActive, setIsActive] = useState(active);

	return (
		<div className={style.Wrapped} {...restProps}>
			<div className={style.name}>
				<span>{name}</span>
			</div>
			<UserStatus active={isActive} />
			<div className={style.role}>
				<UserRole role={role} />
			</div>
			<div className={style.action}></div>
			<button
				onClick={() => {
					setIsActive(!isActive);
				}}
			>
				{isActive.active ? 'Desactive' : 'Active'}
			</button>
		</div>
	);
};

export default UserRow;
