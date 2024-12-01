import { FC } from 'react';
import { generateImageAlt } from '@/utils/imageAlt';
import { TestimonialItem } from '@/types/models/TestimonialItem';
import Stars from '@/components/common/Stars/Stars';
import quotes from '@images/testimonials/quotes.svg';
import styles from './TestimonialSlide.module.scss';

interface TestimonialSlideProps {
	item: TestimonialItem;
}

const TestimonialSlide: FC<TestimonialSlideProps> = ({ item }) => {
	return (
		<div className={styles.slide}>
			<img
				src={quotes}
				alt='Quotes'
				className={styles.quotes}
			/>
			<p className={styles.text}>
				{item.text}
			</p>
			<div className={styles.bottom}>
				<div className={styles.info}>
					<img
						src={item.avatar}
						alt={generateImageAlt(item.avatar)}
						className={styles.avatar}
					/>
					<div className={styles.userDetails}>
						<h3 className={styles.name}>
							{item.name}
						</h3>
						<p className={styles.role}>
							{item.role}
						</p>
					</div>
				</div>
				<div className={styles.rating}>
					<Stars customStyles={styles} rating={item.rating} />
				</div>
			</div>
		</div>
	)
}
export default TestimonialSlide;