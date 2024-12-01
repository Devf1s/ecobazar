import { FC } from 'react';
import Container from '@/components/common/Container';
import ShopButton from '@/components/Buttons/ShopButton/ShopButton';
import { summerBunner } from '@/data/summerBanner';
import styles from './SummerBanner.module.scss';

const SummerBanner: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div
					className={`${styles.banner} bg-image`}
					style={{ backgroundImage: `url(${summerBunner.bgImage})` }}
				>
					<div className={styles.content}>
						<p className={styles.label}>
							{summerBunner.label}
						</p>
						<h3 className={styles.discount}>
							<span>{summerBunner.discount}</span> Off
						</h3>
						<p className={styles.text}>
							{summerBunner.text}
						</p>
						<ShopButton
							background='green'
							size='md'
						/>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default SummerBanner;