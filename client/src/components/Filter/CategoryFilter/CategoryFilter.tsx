import { FC, useState } from 'react';
import { categories } from '@/data/filter/categories';
import { getCategoryCount } from '@/utils/category';
import { CategoryOption } from '@/types/models/filter/CategoryOption';
import RadioButton from '@/components/controls/RadioButton/RadioButton';
import styles from './CategoryFilter.module.scss';

// interface CategoryFilterProps {
// 	categories: CategoryOption[];
// 	selected: string;
// 	onSelect: (category: string) => void;
// }

const CategoryFilter: FC = () => {
	const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(categories[0]);

	const onSelectedCategory = (category: CategoryOption) => {
		console.log(`Selected category: ${category}`);
		setSelectedCategory(category);
	};

	return (
		<div className={styles.categoryFilter}>
			<ul className={styles.list}>
				{categories.map(category =>
					<li
						key={category.value}
						className={styles.option}
					>
						<RadioButton
							id={category.value}
							name={category.label}
							label={<>{category.label} <span>({getCategoryCount(category.label)})</span></>}
							checked={selectedCategory.value === category.value}
							onChange={() => onSelectedCategory(category)}
							customStyles={styles}
						/>
					</li>
				)}
			</ul>
		</div>
	);
};
export default CategoryFilter;