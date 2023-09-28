import PageSelector from '../forms/PageSelector';
import Select from '../forms/Select';
import style from './UserListPagination.module.css';

export const UserListPagination = ({
	page,
	itemsForPages,
	setPage,
	setItemsForPages,
	totalPages,
}) => {
	return (
		<div className={style.wrapper}>
			<div className={style.itemsForPages}>
				<Select
					value={itemsForPages}
					onChange={(ev) => setItemsForPages(Number(ev.target.value))}
				>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
				</Select>
				<p>Elements for pages</p>
			</div>
			<PageSelector page={page} totalPages={totalPages} setPage={setPage} />
		</div>
	);
};
