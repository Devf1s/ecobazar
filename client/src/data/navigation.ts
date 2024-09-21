type NavItem = {
	to: string;
	title: string;
	isDropdown: boolean;
};

export const navItems: NavItem[] = [
	{ to: '/', title: 'Home', isDropdown: true },
	{ to: '/shop', title: 'Shop', isDropdown: true },
	{ to: '/pages', title: 'Pages', isDropdown: true },
	{ to: '/blog', title: 'Blog', isDropdown: true },
	{ to: '/about', title: 'About Us', isDropdown: false },
	{ to: '/contact', title: 'Contact Us', isDropdown: false },
];