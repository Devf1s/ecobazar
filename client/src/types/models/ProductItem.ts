export interface ProductItem {
	id: number;
	name: string;               
	price: number;  
	salePrice?: number;            
	image: string;           
	rating: number;             
	isSale: boolean;           
}