import { FC } from 'react';
import classNames from 'classnames';
import { calculateDiscount } from '@/utils/discount';
import { QuickViewProps, ProductItem } from '@/types/models/ProductItem';
import Price from '@/components/common/Price';
import Stars from '@/components/common/Stars/Stars';
import { Eye, Wishlist, Bag } from '@images/components';
import styles from './SmallProduct.module.scss';

interface SmallProductProps extends QuickViewProps {
	product: ProductItem;
	customStyles?: { [key: string]: string }
}

const SmallProduct: FC<SmallProductProps> = ({ product, customStyles, onQuickView }) => {
	return (
		<div className={classNames(
			styles.product, 
			customStyles?.product
		)}>
			<div className={classNames(
				styles.image, 
				customStyles?.productImage
			)}>
				{product.isSale &&
					<div className={classNames(styles.badge, styles.red)}>
						<p>Sale<span>{calculateDiscount(product)}</span></p>
					</div>
				}
				<div className={styles.controls}>
					<button className={classNames(styles.icon, styles.btn)}>
						<Wishlist />
					</button>
					<button
						onClick={() => onQuickView(product)}
						className={classNames(styles.icon, styles.btn)}
					>
						<Eye />
					</button>
				</div>
				<img src={product.image} alt={product.name} />
			</div>
			<div className={styles.content}>
				<div className={styles.info}>
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
					</div>
				</div>
				<button className={`${styles.icon} ${styles.grayIcon}`}>
					<Bag />
				</button>
			</div>
		</div>
	)
}
export default SmallProduct;