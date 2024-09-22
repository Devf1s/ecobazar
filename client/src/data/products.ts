import { ProductItem } from '@/types/models/ProductItem';
import freshApples from '@images/products/fresh_apples.jpg';
import greenApple from '@images/products/green_apple.jpg';
import malta from '@images/products/malta.jpg';
import cabbage from '@images/products/cabbage.jpg';
import lettuce from '@images/products/lettuce.jpg';
import eggplant from '@images/products/eggplant.jpg';
import potatoes from '@images/products/potatoes.jpg';
import corn from '@images/products/corn.jpg';
import cauliflower from '@images/products/cauliflower.jpg';
import capsicum from '@images/products/capsicum.jpg';
import greenChili from '@images/products/green-chili.jpg';
import redChili from '@images/products/red-chili.jpg';
import redTomatoes from '@images/products/red-tomatoes.jpg';
import mango from '@images/products/mango.jpg';

export const products: ProductItem[] = [
	{
		id: 1,
		name: 'Chinese cabbage',
		price: 24,
		salePrice: 12,
		image: freshApples,
		rating: 5,
		feedbackCount: 524,
		isLarge: true
	},
	{
		id: 2,
		name: 'Green Apple',
		price: 20.99,
		salePrice: 14.99,
		image: greenApple,
		rating: 5,
		isSale: true
	},
	{
		id: 3,
		name: 'Fresh Indian Malta',
		price: 20,
		image: malta,
		rating: 4,
		isSale: false
	},
	{
		id: 4,
		name: 'Chinese cabbage',
		price: 12,
		image: cabbage,
		rating: 4,
		isSale: false
	},
	{
		id: 5,
		name: 'Green Lettuce',
		price: 9,
		image: lettuce,
		rating: 4,
		isSale: false
	},
	{
		id: 6,
		name: 'Eggplant',
		price: 34,
		image: eggplant,
		rating: 3,
		isSale: false
	},
	{
		id: 7,
		name: 'Big Potatoes',
		price: 20,
		image: potatoes,
		rating: 5,
		isSale: false
	},
	{
		id: 8,
		name: 'Corn',
		price: 20,
		image: corn,
		rating: 4,
		isSale: false
	},
	{
		id: 9,
		name: 'Fresh Cauliflower',
		price: 12,
		image: cauliflower,
		rating: 4,
		isSale: false
	},
	{
		id: 10,
		name: 'Green Capsicum',
		price: 9,
		salePrice: 20.99,
		image: capsicum,
		rating: 3,
		isSale: true
	},
	{
		id: 11,
		name: 'Green Chili',
		price: 34,
		image: greenChili,
		rating: 4,
		isSale: false
	},
	{
		id: 12,
		name: 'Red Chili',
		price: 12,
		image: redChili,
		rating: 4,
		isSale: false
	},
	{
		id: 13,
		name: 'Red Tomatoes',
		price: 9,
		salePrice: 20.99,
		image: redTomatoes,
		rating: 5,
		isSale: true
	},
	{
		id: 14,
		name: 'Surjapur Mango',
		price: 34,
		image: mango,
		rating: 4,
		isSale: false
	}
];