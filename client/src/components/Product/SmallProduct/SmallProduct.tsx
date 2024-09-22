import { FC } from 'react';
import { formatPrice, getPrice } from '@/utils/price';
import Stars from '@/components/common/Stars/Stars';
import { Eye, Wishlist, Bag } from '@images/components';
import { SmallProductItem } from '@/types/models/ProductItem';
import styles from './SmallProduct.module.scss';

interface SmallProductProps {
	product: SmallProductItem;
}

const SmallProduct: FC<SmallProductProps> = ({ product }) => {
	return (
		<div className={styles.product}>
			<div className={styles.productImg}>
				{product.isSale &&
					<div className={`${styles.productBadge} ${styles.productBadgeRed}`}>
						<p>Sale<span>50%</span></p>
					</div>
				}
				<div className={styles.productControls}>
					<div className={`${styles.productIcon} ${styles.productBtn}`}>
						<Wishlist />
					</div>
					<div className={`${styles.productIcon} ${styles.productBtn}`}>
						<Eye />
					</div>
				</div>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={styles.productContent}>
				<div className={styles.productInfo}>
					<h4 className={styles.productName}>
						{product.name}
					</h4>
					<p className={styles.productPrice}>
						{formatPrice({ price: getPrice(product) })}
						{product.isSale && <span>{formatPrice({ price: product.price })}</span>}
					</p>
					<div className={styles.productRating}>
						<Stars customStyles={styles} rating={product.rating} />
					</div>
				</div>
				<div className={`${styles.productIcon} ${styles.productGrayIcon}`}>
					<Bag />
				</div>
			</div>
		</div>
	)
}
export default SmallProduct;