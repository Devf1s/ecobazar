import { FC, useState } from 'react';
import classNames from 'classnames';
import styles from '../Filter.module.scss';
import { arrowDown } from '@/assets/images/images';

interface FilterItemProps {
	title: string;
	children: React.ReactNode;
}

const FilterItem: FC<FilterItemProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleOpen = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<div className={styles.filterItem}>
			<button
				onClick={toggleOpen}
				className={styles.toggleHeader}
			>
				<h4 className={styles.title}>
					{title}
				</h4>
				<div 
					className={classNames(
						styles.toggleArrow, 
						{ [styles.active]: isOpen }
					)}
				>
					<img 
						src={arrowDown} 
						alt='Dropdown Arrow' 
					/>
				</div>
			</button>
			{isOpen && <div className={styles.content}>{children}</div>}
		</div>
	)
}
export default FilterItem;