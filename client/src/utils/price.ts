import { ProductItem } from '@/types/models/ProductItem';

// Currencies
export enum Currencies {
	DEFAULT_CURRENCY = 'USD'
}

// Format Price types
interface FormatPriceProps {
	price: number;
	currency?: string;
}

// Get price
export const getPrice = (product: ProductItem): number => {
	return product.isSale && product.salePrice ? product.salePrice : product.price;
};

// Format currencies
export const formatPrice = ({ price, currency = Currencies.DEFAULT_CURRENCY }: FormatPriceProps): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 2,  // always two digits after comma 
		maximumFractionDigits: 2   // limit to two characters 
	}).format(price);
};