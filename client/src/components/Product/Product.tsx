import { FC } from 'react';
import { isBigProduct } from '@/utils/product';
import { ProductItem } from '@/types/models/ProductItem';
import SmallProduct from './SmallProduct/SmallProduct';
import BigProduct from './BigProduct/BigProduct';

interface ProductItemProps {
	product: ProductItem;
}

const Product: FC<ProductItemProps> = ({ product }) => {
	return (
		<>
			{isBigProduct(product) ?
				<BigProduct product={product} />
				:
				<SmallProduct product={product} />
			}
		</>
	)
}
export default Product;