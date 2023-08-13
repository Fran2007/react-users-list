import SearchIcon from '../Icons/SearchIcon';
import style from './InputSearch.module.css';

const InputSearch = ({ className, ...props }) => (
	<div className={`${style.wrapper} ${className || ''}`}>
		<SearchIcon className={style.icons} />
		<input {...props} className={style.input} type="text" />
	</div>
);

export default InputSearch;
