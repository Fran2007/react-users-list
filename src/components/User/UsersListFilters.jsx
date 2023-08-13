import InputSearch from '../forms/InputSearch';
import InputCheckBox from '../forms/InputCheckBox';
import style from './UserListFilters.module.css';
import Select from '../forms/Select';

export const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy,
}) => {
	return (
		<div className={style.form}>
			<div className={style.row}>
				<InputSearch
					placeholder="Buscar..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
				<Select
					value={sortBy}
					onChange={(e) => setSortBy(Number(e.target.value))}
				>
					<option value={0}>For default</option>
					<option value={1}>For name</option>
					<option value={2}>For role</option>
					{!onlyActive && <option value={3}>For actives</option>}
				</Select>
			</div>
			<div className={style.row}>
				<div className={style.active}>
					<InputCheckBox
						className={style.checkbox}
						checked={onlyActive}
						onChange={(e) => setOnlyActive(e.target.checked)}
					/>
					<p>Show only actives</p>
				</div>
			</div>
		</div>
	);
};
