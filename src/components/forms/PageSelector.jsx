import ArrowLeftIcon from '../Icons/ArrowLeftIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import IconsButtons from '../buttons/IconsButtons';
import style from './PageSelector.module.css';

const PageSelector = ({ page, setPage, totalPages }) => {
	const isFirstPage = page === 1;
	const isLastPage = page === totalPages || totalPages == 0;
	return (
		<div className={style.wrapper}>
			<IconsButtons
				filled
				disabled={isFirstPage}
				icon={ArrowLeftIcon}
				onClick={() => setPage(page - 1)}
			/>
			<span>
				Page {page} of {totalPages || 1}
			</span>
			<IconsButtons
				filled
				disabled={isLastPage}
				icon={ArrowRightIcon}
				onClick={() => setPage(page + 1)}
			/>
		</div>
	);
};

export default PageSelector;
