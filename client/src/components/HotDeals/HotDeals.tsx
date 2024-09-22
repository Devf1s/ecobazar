import { FC } from 'react';
import { products } from '@/data/products';
import { isBigProduct } from '@/utils/product';
import Container from '@/components/common/Container';
import Title from '@/components/common/Title/Title';
import Product from '@/components/Product/Product';
import styles from './HotDeals.module.scss';

const HotDeals: FC = () => {
	const largeProduct = products.find(product => isBigProduct(product));
	const smallProducts = products.filter(product => !isBigProduct(product)).slice(2, 13);

	return (
		<div className={styles.hotDeals}>
			<Container>
				<Title text='Hot Deals' />
				<div className={styles.container}>
					<div className={styles.bigProduct}>
						{largeProduct && <Product key={largeProduct.id} product={largeProduct} />}
					</div>
					<div className={styles.productList}>
						{smallProducts.map(product =>
							<Product key={product.id} product={product} />
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}
export default HotDeals;