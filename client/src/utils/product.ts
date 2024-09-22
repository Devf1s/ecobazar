import { BigProductItem, ProductItem } from '@/types/models/ProductItem';

export const isBigProduct = (product: ProductItem): product is BigProductItem => {
	return 'isLarge' in product && product.isLarge === true;
};