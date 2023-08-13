import CheckBoxIcon from '../Icons/CheckBoxIcon';
import style from './InputCheckBox.module.css';

const InputCheckBox = ({ className, ...props }) => (
	<label className={`${style.label} ${className || ''}`}>
		<input {...props} type="checkbox" className={style.input} />
		<CheckBoxIcon className={style.check} />
	</label>	
);

export default InputCheckBox;
