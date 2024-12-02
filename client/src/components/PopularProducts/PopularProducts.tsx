import { FC } from 'react';
import { products } from '@/data/products';
import { QuickViewProps } from '@/types/models/ProductItem';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title/Title';
import Product from '@/components/Product/SmallProduct/SmallProduct';
import styles from './PopularProducts.module.scss';

const PopularProducts: FC<QuickViewProps> = ({ onQuickView }) => {
	const popularProducts = products.slice(0, 10);

	return (
		<div className={styles.products}>
			<Container>
				<Title text='Popular Products' />
				<div className={styles.container}>
					{popularProducts.map(product =>
						<Product
							key={product.id}
							product={product}
							onQuickView={onQuickView}
						/>
					)}
				</div>
			</Container>
		</div>
	)
}
export default PopularProducts;