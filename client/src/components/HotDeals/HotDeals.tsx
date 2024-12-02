import { FC } from 'react';
import { products } from '@/data/products';
import { ProductItem, QuickViewProps } from '@/types/models/ProductItem';
import Title from '@/components/common/Title/Title';
import Container from '@/components/common/Container';
import BigProduct from '@/components/Product/BigProduct/BigProduct';
import SmallProduct from '@/components/Product/SmallProduct/SmallProduct';
import styles from './HotDeals.module.scss';

interface ReduceResult {
	bigProduct: ProductItem | null;
	remainingProducts: ProductItem[];
}

const HotDeals: FC<QuickViewProps> = ({ onQuickView }) => {
	const { bigProduct, remainingProducts } = products.reduce<ReduceResult>(
		(acc, product) => {
			if (!acc.bigProduct && product.isSale) {
				acc.bigProduct = product;
			} else {
				acc.remainingProducts.push(product);
			}
			return acc;
		},
		{ bigProduct: null, remainingProducts: [] }
	);

	const smallProducts = remainingProducts.slice(0, 10);

	return (
		<div className={styles.hotDeals}>
			<Container>
				<Title text='Hot Deals' />
				<div className={styles.container}>
					<div className={styles.bigProduct}>
						{bigProduct && 
							<BigProduct 
								key={bigProduct.id} 
								product={bigProduct} 
								onQuickView={onQuickView}
							/>
						}
					</div>
					<div className={styles.productList}>
						{smallProducts.map(product =>
							<SmallProduct 
								key={product.id} 
								product={product} 
								onQuickView={onQuickView}
							/>
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}
export default HotDeals;