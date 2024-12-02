import { FC, useState } from 'react';
import { ratingOptions } from '@/data/filter/rating';
import Checkbox from '@/components/controls/Checkbox/Checkbox';
import styles from './RatingFilter.module.scss';
import Stars from '@/components/common/Stars/Stars';

const RatingFilter: FC = () => {
	// const [isChecked, setIsChecked] = useState<boolean>(false);

	return (
		<div className={styles.ratingFilter}>
			<ul className={styles.list}>
				{ratingOptions.map(option =>
					<li
						key={option.id}
						className={styles.option}
					>
						<Checkbox
							id={option.id}
							name={option.count}
							checked={false}
							onChange={() => console.log('Option ' + option.id)}
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