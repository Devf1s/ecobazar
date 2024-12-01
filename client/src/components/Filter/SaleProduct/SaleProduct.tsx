import { FC } from 'react';
import { generateImageAlt } from '@/utils/imageAlt';
import { ProductItem } from '@/types/models/ProductItem';
import Stars from '@/components/common/Stars/Stars';
import Price from '@/components/common/Price';
import styles from './SaleProduct.module.scss';

interface SaleProduct {
	product: ProductItem;
}

const SaleProduct: FC<SaleProduct> = ({ product }) => {
	return (
		<div className={styles.saleProducts}>
			<div className={styles.saleProduct}>
				<div className={styles.saleProductImage}>
					<img
						src={product.image}
						alt={generateImageAlt(product.image)}
						loading='lazy'
					/>
				</div>
				<div className={styles.saleProductContent}>
					<p className={styles.saleProductName}>
						{product.name}
					</p>
					<Price
						product={product}
						className={styles.saleProductPrice}
					/>
					<Stars
						rating={product.rating}
						customStyles={styles}
					/>
				</div>
			</div>
		</div>
	)
}
export default SaleProduct;