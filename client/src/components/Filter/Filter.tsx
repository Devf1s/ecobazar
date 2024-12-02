import { FC } from 'react';
import { ProductItem } from '@/types/models/ProductItem';
import ShopButton from '@/components/Buttons/ShopButton/ShopButton';
import FilterItem from './FilterItem/FilterItem';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import RatingFilter from './RatingFilter/RatingFilter';
import TagFilter from './TagFilter/TagFilter';
import SaleProduct from './SaleProduct/SaleProduct';
import filterIcon from '@images/icons/filter.svg';
import firstOrder from '@images/banners/first-order.jpg'
import styles from './Filter.module.scss';

interface FilterProps {
	saleProducts?: ProductItem[];
}

const Filter: FC<FilterProps> = ({ saleProducts }) => {
	return (
		<div className={styles.filter}>
			<button className={styles.filterButton}>
				Filter <img src={filterIcon} alt='Filter Icon' />
			</button>
			<div className={styles.filterItems}>
				<FilterItem title='All Categories'>
					<CategoryFilter />
				</FilterItem>
				<FilterItem title='Price'>
					<PriceFilter />
				</FilterItem>
				<FilterItem title='Rating'>
					<RatingFilter />
				</FilterItem>
				<FilterItem title='Popular Tag'>
					<TagFilter />
				</FilterItem>
			</div>
			<div
				className={`${styles.discountBanner} bg-image`}
				style={{ backgroundImage: `url(${firstOrder})` }}
			>
				<div className={styles.discountLabel}>
					<span>79%</span> Discount
				</div>
				<p className={styles.discountText}>
					on your first order
				</p>
				<ShopButton />
			</div>
			{saleProducts &&
				<div className={styles.saleProductsWrapper}>
					<h4 className={styles.saleProductsTitle}>
						Sale Products
					</h4>
					<div className={styles.saleProducts}>
						{saleProducts.map(saleProduct =>
							<SaleProduct
								key={saleProduct.id}
								product={saleProduct}
							/>
						)}
					</div>
				</div>
			}
		</div>
	)
}
export default Filter;