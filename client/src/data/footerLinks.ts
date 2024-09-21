import { FooterCategory } from '@/types/models/FooterLink';

export const footerLinks: FooterCategory[] = [
	{
		category: 'My Account',
		links: [
			{ title: 'My Account', url: '/my-account' },
			{ title: 'Order History', url: '/order-history' },
			{ title: 'Shopping Cart', url: '/shopping-cart' },
			{ title: 'Wishlist', url: '/wishlist' }
		]
	},
	{
		category: 'Helps',
		links: [
			{ title: 'Contact', url: '/contact' },
			{ title: 'FAQs', url: '/faqs' },
			{ title: 'Terms & Condition', url: '/terms' },
			{ title: 'Privacy Policy', url: '/privacy' }
		]
	},
	{
		category: 'Proxy',
		links: [
			{ title: 'About', url: '/about' },
			{ title: 'Shop', url: '/shop' },
			{ title: 'Product', url: '/product' },
			{ title: 'Track Order', url: '/track-order' }
		]
	},
	{
		category: 'Categories',
		links: [
			{ title: 'Fruit & Vegetables', url: '/categories/fruit-vegetables' },
			{ title: 'Meat & Fish', url: '/categories/meat-fish' },
			{ title: 'Bread & Bakery', url: '/categories/bread-bakery' },
			{ title: 'Beauty & Health', url: '/categories/beauty-health' }
		]
	}
];