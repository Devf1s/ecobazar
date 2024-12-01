import { ProductItem } from '@/types/models/ProductItem';

export const calculateDiscount = (product: ProductItem): string => {
	if (!product.isSale || !product.salePrice) {
		return '0%'; // If there's no sale price, return 0 ( no discount )
	} else {
		const discountPct = ((product.price - product.salePrice) / product.price) * 100;
		return `${Math.round(discountPct)}%`;
	}
};