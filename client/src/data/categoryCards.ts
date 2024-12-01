import { CategoryCard } from '@/types/models/CategoryCard';
import fruit from '@images/categories/fresh-fruit.png';
import vegetables from '@images/categories/vegetables.png';
import meatFish from '@images/categories/meat-fish.png';
import snacks from '@images/categories/snacks.png';
import beverages from '@images/categories/beverages.png';
import health from '@images/categories/beauty-health.png';
import bakery from '@images/categories/bakery.png';
import bakingNeeds from '@images/categories/baking-needs.png';
import cooking from '@images/categories/cooking.png';
import diabetic from '@images/categories/diabetic.png';
import detergents from '@images/categories/dish-detergents.png';
import oil from '@images/categories/oil.png';

export const categoryCards: CategoryCard[] = [
	{
		id: 1,
		name: 'Fresh Fruit',
		image: fruit
	},
	{
		id: 2,
		name: 'Fresh Vegetables',
		image: vegetables
	},
	{
		id: 3,
		name: 'Meat & Fish',
		image: meatFish
	},
	{
		id: 4,
		name: 'Snacks',
		image: snacks
	},
	{
		id: 5,
		name: 'Beverages',
		image: beverages
	},
	{
		id: 6,
		name: 'Beauty & Health',
		image: health
	},
	{
		id: 7,
		name: 'Bread & Bakery',
		image: bakery
	},
	{
		id: 8,
		name: 'Baking Needs',
		image: bakingNeeds
	},
	{
		id: 9,
		name: 'Cooking',
		image: cooking
	},
	{
		id: 10,
		name: 'Diabetic Food',
		image: diabetic
	},
	{
		id: 11,
		name: 'Dish Detergents',
		image: detergents
	},
	{
		id: 12,
		name: 'Oil',
		image: oil
	}
];