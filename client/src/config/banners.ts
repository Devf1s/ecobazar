import { MainBannerItem, SideBannerItem } from '@/types/models/BannerItem';
import freshFood from '@images/banners/fresh-food.jpg';
import summerSale from '@images/banners/summer-sale.jpg';
import dealMonth from '@images/banners/deal-month.jpg';

export const mainBanners: MainBannerItem[] = [
	{
		id: 1,
		type: 'main',
		bgImage: freshFood,
		title: 'Fresh & Healthy Organic Food',
		description: 'Free shipping on all your order.',
		discount: '30%',
		btnText: 'Shop now'
	}
];

export const sideBanners: SideBannerItem[] = [
	{
		id: 1,
		type: 'side',
		bgImage: summerSale,
		label: 'Summer sale',
		description: 'Only Fruit & Vegetable',
		discount: '75%',
		btnText: 'Shop Now'
	},
	{
		id: 2,
		type: 'side',
		bgImage: dealMonth,
		label: 'Best deal',
		title: 'Special Products Deal of the Month',
		btnText: 'Shop Now'
	}
];