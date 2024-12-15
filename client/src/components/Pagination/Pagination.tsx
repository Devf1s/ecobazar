import { FC } from 'react';
import { PageArrow } from '@/assets/images/components';
import classNames from 'classnames';
import styles from './Pagination.module.scss';

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, currentPage, setPage }) => {
	console.log(totalPages);
	const pages: number[] = [];
	for (let i = 0; i < totalPages; i++) {
		pages.push(i + 1);
	}

	const isFirstPage = currentPage === pages[0];
	const isLastPage = currentPage === pages[pages.length - 1];

	const handlePrevClick = () => {
		if (totalPages > 7 && isLastPage) {
			setPage(pages[4]);
		} else {
			setPage(currentPage - 1);
		}
	}
	
	const handleNextClick = () => {
		if (totalPages > 7 && currentPage === pages[4]) {
			setPage(pages[pages.length - 1]);
		} else {
			setPage(currentPage + 1);
		}
	}

	return (
		<div className={styles.pagination}>
			<div className={styles.inner}>
				<button
					disabled={isFirstPage}
					className={classNames(
						styles.button,
						styles.navButton,
						styles.prev
					)}
					onClick={handlePrevClick}
				>
					<PageArrow />
				</button>
				<ul className={styles.navItems}>
					{pages.map((page, index) => {
						const isEllipsis = totalPages > 7 && index === 5;
						const isVisible = index <= 5 || page === totalPages;

						if (isEllipsis) {
							return (
								<li 
									key={page} 
									className={styles.navItem}
								>
									<div className={styles.ellipsis}>
										...
									</div>
								</li>
							);
						}
						if (isVisible) {
							return (
								<li key={page} className={styles.navItem}>
									<button
										onClick={() => setPage(page)}
										className={classNames(
											styles.button,
											styles.navButton,
											{ [styles.active]: currentPage === page }
										)}
									>
										<p>{page}</p>
									</button>
								</li>
							);
						}
						return null;
					})}
				</ul>
				<button
					disabled={isLastPage}
					className={classNames(
						styles.button,
						styles.next
					)}
					onClick={handleNextClick}
				>
					<PageArrow />
				</button>
			</div>
		</div >
	)
}
export default Pagination;