import { ProductItem } from '@/types/models/ProductItem';
import greenApple from '@images/products/green_apple.jpg';
import malta from '@images/products/malta.jpg';
import cabbage from '@images/products/cabbage.jpg';
import lettuce from '@images/products/lettuce.jpg';
import eggplant from '@images/products/eggplant.jpg';
import potatoes from '@images/products/potatoes.jpg';
import corn from '@images/products/corn.jpg';
import cauliflower from '@images/products/cauliflower.jpg';
import capsicum from '@images/products/capsicum.jpg';
import chili from '@images/products/chili.jpg';

export const products: ProductItem[] = [
	{
		id: 1,
		name: 'Green Apple',
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		isSale: true
	},
	{
		id: 2,
		name: 'Fresh Indian Malta',
		price: 20,
		image: malta,
		rating: 4,
		isSale: false
	},
	{
		id: 3,
		name: 'Chinese cabbage',
		price: 12,
		image: cabbage,
		rating: 4,
		isSale: false
	},
	{
		id: 4,
		name: 'Green Lettuce',
		price: 9,
		image: lettuce,
		rating: 4,
		isSale: false
	},
	{
		id: 5,
		name: 'Eggplant',
		price: 34,
		image: eggplant,
		rating: 3,
		isSale: false
	},
	{
		id: 6,
		name: 'Big Potatoes',
		price: 20,
		image: potatoes,
		rating: 5,
		isSale: false
	},
	{
		id: 7,
		name: 'Corn',
		price: 20,
		image: corn,
		rating: 4,
		isSale: false
	},
	{
		id: 8,
		name: 'Fresh Cauliflower',
		price: 12,
		image: cauliflower,
		rating: 4,
		isSale: false
	},
	{
		id: 9,
		name: 'Green Capsicum',
		price: 9,
		salePrice: 20.99,
		image: capsicum,
		rating: 3,
		isSale: true
	},
	{
		id: 10,
		name: 'Green Chili',
		price: 34,
		image: chili,
		rating: 4,
		isSale: false
	},
];