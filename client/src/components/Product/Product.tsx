import { FC } from 'react';
import Stars from '@/components/common/Stars/Stars';
import { formatPrice, getPrice } from '@/utils/price';
import { Eye, Wishlist, Bag } from '@images/components';
import { ProductItem } from '@/types/models/ProductItem';
import styles from './Product.module.scss';

interface ProductItemProps {
	product: ProductItem
}

const Product: FC<ProductItemProps> = ({ product }) => {
	return (
		<div className={styles.product}>
			<div className={styles.productImg}>
				{product.isSale &&
					<div className={styles.productBadge}>
						<span>Sale 50%</span>
					</div>
				}
				<div className={styles.productControls}>
					<div className={`${styles.productWishlist} ${styles.productBtn}`}>
						<Wishlist />
					</div>
					<div className={`${styles.productView} ${styles.productBtn}`}>
						<Eye />
					</div>
				</div>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={styles.productBottom}>
				<div className={styles.productInfo}>
					<p className={styles.productName}>
						{product.name}
					</p>
					<p className={styles.productPrice}>
						{formatPrice({ price: getPrice(product) })}
						{product.isSale && <span>{formatPrice({ price: product.price })}</span>}
					</p>
					<div className={styles.productRating}>
						<Stars rating={product.rating} />
					</div>
				</div>
				<div className={styles.productCart}>
					<Bag />
				</div>
			</div>
		</div>
	)
}
export default Product;