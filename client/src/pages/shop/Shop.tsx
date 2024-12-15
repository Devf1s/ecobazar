import { FC, useEffect } from 'react';
import { products } from '@/data/products';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setPage, setTotalCount } from '@/store/reducers/userSlice';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import MonthlyBanner from '@/components/MonthlyBanner/MonthlyBanner';
import Product from '@/components/Product/SmallProduct/SmallProduct';
import Pagination from '@/components/Pagination/Pagination';
import Filter from '@/components/Filter/Filter';
import styles from './Shop.module.scss';

const Shop: FC = () => {
	const dispatch = useAppDispatch();
	const { page, totalCount, limit } = useAppSelector(state => state.user);
	const saleProducts = products.filter(product => product.isSale).slice(0, 3);
	const pageCount = Math.ceil(products.length / limit);

	const handlePage = (page: number) => {
        dispatch(setPage(page));
    }
	
	useEffect(() => {
		dispatch(setTotalCount(pageCount));
	}, [dispatch, pageCount]);
	
	// const [productsList, setProductsList] = useState(products);
	// const [selectedProduct, setSelectedProduct] = useState<string>(''); // Sort Input

	// const sortProducts = (sort: string) => {
	// 	setSelectedProduct(sort);
	// 	setProductsList(productsList.sort((a, b) => a[sort].localeCompare(b[sort])));
	// }

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
							{products.slice(0, limit).map(product =>
								<Product 
									key={product.id}
									product={product}
									onQuickView={() => console.log(product)}
									customStyles={styles}
								/>
							)}
						</div>
						<Pagination 
							totalPages={totalCount}
							currentPage={page}
							setPage={handlePage}
						/>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default Shop;