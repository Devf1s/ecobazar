import { FC } from 'react';
import { products } from '@/data/products';
import { isBigProduct } from '@/utils/product';
import Title from '../common/Title/Title';
import Container from '../common/Container';
import Product from '@/components/Product/Product';
import styles from './FeaturedProducts.module.scss';

const FeaturedProducts: FC = () => {
	const featuredProducts = products.filter(product => !isBigProduct(product)).slice(0, 5);

	return (
		<div className={styles.products}>
			<Container>
				<Title text='Featured Products' />
				<div className={styles.container}>
					{featuredProducts.map(product =>
						<Product key={product.id} product={product} />
					)}
				</div>
			</Container>
		</div>
	)
}
export default FeaturedProducts;