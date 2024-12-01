import { FC } from 'react';
import { products } from '@/data/products';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import MonthlyBanner from '@/components/MonthlyBanner/MonthlyBanner';
import Product from '@/components/Product/SmallProduct/SmallProduct';
import Pagination from '@/components/Pagination/Pagination';
import Filter from '@/components/Filter/Filter';
import styles from './Shop.module.scss';

const Shop: FC = () => {
	const saleProducts = products.filter(product => product.isSale).slice(0, 3);

	return (
		<div className={styles.shop}>
			<Breadcrumb />
			<MonthlyBanner />
			<Container>
				<div className={styles.between}>
					<Filter saleProducts={saleProducts} />
					<div className={styles.productsListWrapper}>
						<div className={styles.controls}>
							{/* ... */}
						</div>
						<div className={styles.productList}>
							{products.map(product =>
								<Product 
									key={product.id}
									product={product}
									onQuickView={() => console.log(product)}
									customStyles={styles}
								/>
							)}
						</div>
						<Pagination />
					</div>
				</div>
			</Container>
		</div>
	)
}
export default Shop;