import { BannerCard } from '@/types/models/BannerCard';
import vegetables from '@images/banners/vegetables.jpg';
import meat from '@images/banners/meat.jpg';
import freshFruit from '@images/banners/fresh_fruit.jpg';

export const bannerCards: BannerCard[] = [
	{
		id: 1,
		bgImage: vegetables,
		label: 'Best Deals',
		title: 'Sale of the Month',
		isTimer: true
	},
	{
		id: 2,
		bgImage: meat,
		label: '85% Fat Free',
		title: 'Low-Fat Meat',
		text: 'Started at',
		isTimer: false,
		price: '$79.99'
	},
	{
		id: 3,
		bgImage: freshFruit,
		label: 'Summer Sale',
		title: '100% Fresh Fruit',
		text: 'Up to',
		isTimer: false,
		isDarkStyle: true,
		discount: '64% OFF',
	}
];