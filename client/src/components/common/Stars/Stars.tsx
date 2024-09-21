import { FC } from 'react';
import star from '@images/icons/star.svg';
import grayStar from '@images/icons/star-gray.svg';
import styles from './Stars.module.scss';

interface StarsProps {
	rating: number;
}

const Stars: FC<StarsProps> = ({ rating }) => {
	const totalStars = 5;

	const stars = Array.from({ length: totalStars }, (_, index) => {
		return index < rating ?
			<img
				key={index}
				src={star}
				className={styles.star}
				alt='Star'
			/>
			:
			<img
				key={index}
				src={grayStar}
				className={styles.star}
				alt='Gray star'
			/>
	});

	return (
		<div className={styles.stars}>
			{stars}
		</div>
	)
}
export default Stars;