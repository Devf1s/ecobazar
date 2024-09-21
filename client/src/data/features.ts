import { FeatureItem } from '@/types/models/FeatureItem';
import shoppingBag from '@images/features/shopping-bag.svg';
import headphones from '@images/features/headphones.svg';
import delivery from '@images/features/delivery.svg';
import container from '@images/features/container.svg';

export const features: FeatureItem[] = [
	{
		id: 1,
		image: delivery,
		name: 'Free Shipping',
		description: 'Free shipping on all your order'
	},
	{
		id: 2,
		image: shoppingBag,
		name: 'Customer Support 24/7',
		description: 'Instant access to Support'
	},
	{
		id: 3,
		image: headphones,
		name: '100% Secure Payment',
		description: 'We ensure your money is save'
	},
	{
		id: 4,
		image: container,
		name: 'Money-Back Guarantee',
		description: '30 Days Money-Back Guarantee'
	}
];