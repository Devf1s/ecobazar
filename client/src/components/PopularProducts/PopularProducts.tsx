import { FC } from 'react';
import { products } from '@/data/products';
import { isBigProduct } from '@/utils/product';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title/Title';
import Product from '@/components/Product/Product';
import styles from './PopularProducts.module.scss';

const PopularProducts: FC = () => {
	const popularProducts = products.filter(product => !isBigProduct(product)).slice(0, 10);
	
	return (
		<div className={styles.products}>
			<Container>
				<Title text='Popular Products' />
				<div className={styles.container}>
					{popularProducts.map(product =>
						<Product
							key={product.id}
							product={product}
						/>
					)}
				</div>
			</Container>
		</div>
	)
}
export default PopularProducts;