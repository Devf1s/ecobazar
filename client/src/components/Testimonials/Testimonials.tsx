import { FC } from 'react';
import { testimonials } from '@/data/testimonials';
import { generateImageAlt } from '@/utils/imageAlt';
import Container from '@/components/common/Container';
import Stars from '@/components/common/Stars/Stars';
import quotes from '@images/testimonials/quotes.svg';
import styles from './Testimonials.module.scss';
import { SlideArrow } from '@/assets/images/components';

const Testimonials: FC = () => {
	return (
		<div className={styles.testimonials}>
			<Container>
				<div className={styles.header}>
					<h2>Client Testimonials</h2>
					<div className={styles.slideArrows}>
						<div className={styles.slideArrow}>
							<SlideArrow />
						</div>
						<div className={`${styles.slideArrow} ${styles.active}`}>
							<SlideArrow />
						</div>
					</div>
				</div>
				<div className={styles.items}>
					{testimonials.map(item =>
						<div
							key={item.id}
							className={styles.item}
						>
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
					)}
				</div>
			</Container>
		</div>
	)
}
export default Testimonials;