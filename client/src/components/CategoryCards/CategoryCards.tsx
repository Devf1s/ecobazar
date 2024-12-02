import { FC } from 'react';
import { categoryCards } from '@/data/categoryCards';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title/Title';
import styles from './CategoryCards.module.scss';

const CategoryCards: FC = () => {
	return (
		<div className={styles.categories}>
			<Container>
				<Title text='Popular Categories' />
				<div className={styles.container}>
					{categoryCards.map(category =>
						<div
							key={category.id}
							className={styles.category}
						>
							<img
								src={category.image}
								alt={category.name}
								className={styles.categoryImg}
							/>
							<p className={styles.categoryName}>
								{category.name}
							</p>
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
export default CategoryCards;