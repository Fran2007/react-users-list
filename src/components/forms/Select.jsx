import { ArrowDownIcons } from '../Icons/ArrowDownIcons';
import style from '../forms/Select.module.css';

const Select = ({ className, ...props }) => (
	<div className={`${style.Wrapper} ${className || ''}`}>
		<select {...props} className={style.select}></select>
		<ArrowDownIcons className={style.arrow} />
	</div>
);

export default Select;
