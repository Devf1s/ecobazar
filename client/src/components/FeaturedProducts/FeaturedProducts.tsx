import { FC } from 'react';
import { products } from '@/data/products';
import { QuickViewProps } from '@/types/models/ProductItem';
import Title from '@/components/common/Title/Title';
import Container from '@/components/common/Container';
import Product from '@/components/Product/SmallProduct/SmallProduct';
import styles from './FeaturedProducts.module.scss';

const FeaturedProducts: FC<QuickViewProps> = ({ onQuickView }) => {
	const featuredProducts = products.slice(0, 5);

	return (
		<div className={styles.products}>
			<Container>
				<Title text='Featured Products' />
				<div className={styles.container}>
					{featuredProducts.map(product =>
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
export default FeaturedProducts;