import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	const activeClassName = active ? style.active : style.inactive;

	return (
		<div className={style.status}>
			<span className={activeClassName}>{active ? 'Active' : 'Inactive'}</span>
		</div>
	);
};

export default UserStatus;
