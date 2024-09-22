import { TestimonialItem } from '@/types/models/TestimonialItem';
import robert from '@images/testimonials/customers/robert.png';
import dianne from '@images/testimonials/customers/dianne.png';
import eleanor from '@images/testimonials/customers/eleanor.png';

export const testimonials: TestimonialItem[] = [
	{
		id: 1,
		text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
		name: 'Robert Fox',
		role: 'Customer',
		avatar: robert,
		rating: 5
	},
	{
		id: 2,
		text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
		name: 'Dianne Russell',
		role: 'Customer',
		avatar: dianne,
		rating: 4
	},
	{
		id: 3,
		text: 'Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget',
		name: 'Eleanor Pena',
		role: 'Customer',
		avatar: eleanor,
		rating: 5
	}
];