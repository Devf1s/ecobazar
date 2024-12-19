export interface ProductItem {
	id: number;
	name: string;               
	price: number;  
	salePrice?: number;  
	isSale: boolean;          
	image: string;           
	rating: number;   
	reviews: number;          
	category: string;           
}

export interface QuickViewProps {
	onQuickView: OnQuickView;
}

export type OnQuickView = (product: ProductItem) => void;