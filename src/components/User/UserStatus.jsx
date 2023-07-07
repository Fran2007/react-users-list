import CheckCircleIcons from '../Icons/CheckCircleIcons';
import CrossCircleIcons from '../Icons/CrossCircleIcons';
import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
	const activeClassName = active ? style.active : style.inactive;
	const Icons = active ? CheckCircleIcons : CrossCircleIcons;

	return (
		<div className={activeClassName}>
			<Icons className={style.icon} />
			<span>{active ? 'Activo' : 'Inactivo'}</span>
		</div>
	);
};

export default UserStatus;
