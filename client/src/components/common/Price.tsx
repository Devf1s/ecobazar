import { FC } from 'react';
import { formatPrice, getPrice } from '@/utils/price';
import { ProductItem } from '@/types/models/ProductItem';

interface PriceProps {
	product: ProductItem;
	className: string;
	isReversed?: boolean;
}

const Price: FC<PriceProps> = ({ product, className, isReversed = false }) => {
	const salePrice = formatPrice({ price: getPrice(product) });
	const price = product.isSale ? formatPrice({ price: product.price }) : null;

	return (
		<p className={className}>
			{isReversed ?
				<>
					{price && <span>{price}</span>}
					{salePrice}
				</>
				:
				<>
					{salePrice}
					{price && <span>{price}</span>}
				</>
			}
		</p>
	)
}
export default Price;