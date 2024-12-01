export interface ProductItem {
	id: number;
	name: string;               
	price: number;  
	salePrice?: number;            
	image: string;           
	rating: number;   
	reviews: number;          
	isSale: boolean;
	category: string;           
}

export interface QuickViewProps {
	onQuickView: OnQuickView;
}

export type OnQuickView = (product: ProductItem) => void;