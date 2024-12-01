import { FC } from 'react';
import { targetTimes } from '@/data/timer';
import { calculateDiscount } from '@/utils/discount';
import { QuickViewProps, ProductItem } from '@/types/models/ProductItem';
import ProductButton from '@/components/Buttons/ProductButton/ProductButton';
import Price from '@/components/common/Price';
import Stars from '@/components/common/Stars/Stars';
import Timer from '@/components/common/Timer/Timer';
import { Eye, Wishlist } from '@images/components';
import styles from './BigProduct.module.scss';

interface BigProductProps extends QuickViewProps {
	product: ProductItem;
}

const BigProduct: FC<BigProductProps> = ({ product, onQuickView }) => {
	return (
		<div className={styles.product}>
			<div className={styles.image}>
				<div className={styles.badges}>
					<div className={`${styles.badge} ${styles.red}`}>
						<p>Sale<span>{calculateDiscount(product)}</span></p>
					</div>
					<div className={`${styles.badge} ${styles.blue}`}>
						<p>Best Sale</p>
					</div>
				</div>
				<div className={styles.controls}>
					<div className={`${styles.icon} ${styles.grayIcon} ${styles.icon}`}>
						<Wishlist />
					</div>
					<ProductButton size='small' />
					<button
						onClick={() => onQuickView(product)}
						className={`${styles.icon} ${styles.grayIcon} ${styles.icon}`}
					>
						<Eye />
					</button>
				</div>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={styles.content}>
				<h4 className={styles.name}>
					{product.name}
				</h4>
				<Price 
					product={product} 
					className={styles.price} 
				/>
				<div className={styles.rating}>
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