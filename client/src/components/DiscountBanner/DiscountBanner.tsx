import { FC } from 'react';
import Container from '@/components/common/Container';
import ShopButton from '@/components/Buttons/ShopButton/ShopButton';
import { discountBanner } from '@/data/discountBanner';
import styles from './DiscountBanner.module.scss';

const DiscountBanner: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div
					className={`${styles.section} bg-image`}
					style={{ backgroundImage: `url(${discountBanner.bgImage})` }}
				>
					<div className={styles.content}>
						<p className={styles.label}>
							{discountBanner.label}
						</p>
						<h3 className={styles.discount}>
							<span>{discountBanner.discount}</span> Off
						</h3>
						<p className={styles.text}>
							{discountBanner.text}
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
export default DiscountBanner;