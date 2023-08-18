import InputSearch from '../forms/InputSearch';
import InputCheckBox from '../forms/InputCheckBox';
import style from './UserListFilters.module.css';
import Select from '../forms/Select';
import { SORT_OPTIONS } from '../../Constants/sortOptions';

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
					<option value={SORT_OPTIONS.DEFAULT}>For default</option>
					<option value={SORT_OPTIONS.NAME}>For name</option>
					<option value={SORT_OPTIONS.ROLE}>For role</option>
					{!onlyActive && (
						<option value={SORT_OPTIONS.ROLE}>For actives</option>
					)}
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
