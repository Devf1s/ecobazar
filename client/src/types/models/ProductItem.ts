export interface SmallProductItem {
	id: number;
	name: string;               
	price: number;  
	salePrice?: number;            
	image: string;           
	rating: number;             
	isSale: boolean;           
}

export interface BigProductItem {
	id: number;
	name: string;               
	price: number;  
	salePrice: number;            
	image: string;           
	rating: number;  
	feedbackCount: number;         
	isLarge: true; 
}

export type ProductItem = SmallProductItem | BigProductItem;