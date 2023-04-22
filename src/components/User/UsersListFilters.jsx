import style from './UserListFilters.module.css';

export const UsersListFilters = ({
	search,
	setSearch,
	onlyActive,
	setOnlyActive,
	sortBy,
	setSortBy,
}) => {
	return (
		<div>
			<form className={style.form}>
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				></input>
				<div className={style.active}>
					<input
						type="checkbox"
						checked={onlyActive}
						onChange={(e) => setOnlyActive(e.target.checked)}
					></input>
					<span>Only actives</span>
				</div>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(Number(e.target.value))}
				>
					<option value={0}>For default</option>
					<option value={1}>For name</option>
				</select>
			</form>
		</div>
	);
};
