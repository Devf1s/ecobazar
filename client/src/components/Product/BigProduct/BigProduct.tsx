import { FC } from 'react';
import { targetTimes } from '@/data/timer';
import { formatPrice } from '@/utils/price';
import Stars from '@/components/common/Stars/Stars';
import Timer from '@/components/common/Timer/Timer';
import { Eye, Wishlist, Bag } from '@images/components';
import { BigProductItem } from '@/types/models/ProductItem';
import styles from './BigProduct.module.scss';

interface BigProductProps {
	product: BigProductItem;
}

const BigProduct: FC<BigProductProps> = ({ product }) => {
	return (
		<div className={styles.product}>
			<div className={styles.productImg}>
				<div className={styles.productBadges}>
					<div className={`${styles.productBadge} ${styles.productBadgeRed}`}>
						<p>Sale<span>50%</span></p>
					</div>
					<div className={`${styles.productBadge} ${styles.productBadgeBlue}`}>
						<p>Best Sale</p>
					</div>
				</div>
				<div className={styles.productControls}>
					<div className={`${styles.productIcon} ${styles.productGrayIcon} ${styles.icon}`}>
						<Wishlist />
					</div>
					<button className={styles.productBtn}>
						Add to Cart 
						<Bag />
					</button>
					<div className={`${styles.productIcon} ${styles.productGrayIcon} ${styles.icon}`}>
						<Eye />
					</div>
				</div>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={styles.productContent}>
				<h4 className={styles.productName}>
					{product.name}
				</h4>
				<p className={styles.productPrice}>
					{formatPrice({ price: product.price })}
					<span>{formatPrice({ price: product.salePrice })}</span>
				</p>
				<div className={styles.productRating}>
					<Stars
						customStyles={styles}
						rating={product.rating}
					/>
					<p>(524 Feedback)</p>
				</div>
				<div className={styles.timerWrapper}>
					<p className={styles.timerText}>
						Hurry up! Offer ends In:
					</p>
					<Timer
						customStyles={styles}
						targetDate={targetTimes.saleOfTheMonth}
					/>
				</div>
			</div>
		</div>
	)
}
export default BigProduct;