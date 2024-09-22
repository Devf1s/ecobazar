import { FC } from 'react';
import star from '@images/icons/star.svg';
import grayStar from '@images/icons/star-gray.svg';
import classNames from 'classnames';
import styles from './Stars.module.scss';

interface StarsProps {
	rating: number;
	customStyles?: { [key: string]: string };
}

const Stars: FC<StarsProps> = ({ rating, customStyles }) => {
	const totalStars = 5;

	const stars = Array.from({ length: totalStars }, (_, index) => {
		return index < rating ?
			<div
				key={index}
				className={classNames(styles.star, customStyles?.star)}
			>
				<img
					src={star}
					alt='Star'
				/>
			</div>
			:
			<div
				key={index}
				className={classNames(styles.star, customStyles?.star)}
			>
				<img
					src={grayStar}
					alt='Gray star'
				/>
			</div>
	});

	return (
		<div className={classNames(styles.stars, customStyles?.stars)}>
			{stars}
		</div>
	)
}
export default Stars;