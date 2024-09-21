import { FC } from 'react';
import { products } from '@/data/products';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title/Title';
import Product from '@/components/Product/Product';
import styles from './Products.module.scss';

const Products: FC = () => {
	return (
		<div className={styles.products}>
			<Container>
				<Title text='Popular Products' />
				<div className={styles.container}>
					{products.map(product =>
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
export default Products;