import { FC, useState } from 'react';
import { ratingOptions } from '@/data/filter/rating';
import Checkbox from '@/components/controls/Checkbox/Checkbox';
import styles from './RatingFilter.module.scss';
import Stars from '@/components/common/Stars/Stars';

const RatingFilter: FC = () => {
	const [isChecked, setIsChecked] = useState<boolean[]>(
		ratingOptions.map(() => false)
	);

	const handleChange = (index: number) => {
		setIsChecked(prev => prev.map((checked, i) => (i === index ? !checked : checked)));
	};

	return (
		<div className={styles.ratingFilter}>
			<ul className={styles.list}>
				{ratingOptions.map((option, index) =>
					<li
						key={option.id}
						className={styles.option}
					>
						<Checkbox
							id={option.count}
							name={option.count}
							checked={isChecked[index]}
							onChange={() => handleChange(index)}
							label={
								<>
									<Stars
										rating={option.rating}
										customStyles={styles}
									/>
									<p className={styles.count}>
										{option.count}
									</p>
								</>
							}
							customStyles={styles}
						/>
					</li>
				)}
			</ul>
		</div>
	)
}
export default RatingFilter;