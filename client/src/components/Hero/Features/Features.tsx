import { FC } from 'react';
import { features } from '@/config/features';
import styles from './Features.module.scss';

const Features: FC = () => {
	return (
		<div className={styles.features}>
			{features.map(feature =>
				<div 
					key={feature.id}
					className={styles.feature}
				>
					<img 
						src={feature.image} 
						alt={feature.name} 
						className={styles.featureImg}
					/>
					<div className={styles.featureContent}>
						<h3 className={styles.featureName}>
							{feature.name}
						</h3>
						<p className={styles.featureDesc}>
							{feature.description}
						</p>
					</div>
				</div>
			)}
		</div>
	)
}
export default Features;