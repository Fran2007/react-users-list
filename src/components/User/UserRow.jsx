import { useState } from 'react';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';
import UserRole from './UserRole';

export const UserRow = ({ id, name, active, role, toggleUserActive }) => (
	<div className={style.Wrapped}>
		<div className={style.name}>
			<span>{name}</span>
		</div>
		<UserStatus active={active} />
		<div className={style.role}>
			<UserRole role={role} />
		</div>
		<div className={style.action}></div>
		<button onClick={() => toggleUserActive(id)}>
			{active ? 'Desactive' : 'Active'}
		</button>
	</div>
);
