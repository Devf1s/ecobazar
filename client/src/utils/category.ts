import { CategoryNames } from '@/consts/categories';
import { products } from '@/data/products';

// Get category count
export const getCategoryCount = (category: string) => {
	if (category === CategoryNames.All) {
		return products.length;
	} else {
		return products.filter(product => product.category === category).length;
	}
};