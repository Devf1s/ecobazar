import { authors, categories, NewsItem } from '@/types/models/NewsItem';
import lemons from '@images/news/lemons.jpg';
import avocadoToast from '@images/news/avocado-toast.jpg';
import salad from '@images/news/salad.jpg';

export const news: NewsItem[] = [
	{
		id: 1,
		day: 18,
		month: 'November',
		image: lemons,  
		category: categories.FOOD,
		author: authors.ADMIN,
		commentsCount: 65,
		title: 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
		linkPath: ''
	},
	{
		id: 2,
		day: 29,
		month: 'January',
		image: avocadoToast,  
		category: categories.FOOD,
		author: authors.ADMIN,
		commentsCount: 43,
		title: 'Eget lobortis lorem lacinia. Vivamus pharetra semper,',
		linkPath: ''
	},
	{
		id: 3,
		day: 21,
		month: 'February',
		image: salad,  
		category: categories.FOOD,
		author: authors.ADMIN,
		commentsCount: 80,
		title: 'Maecenas blandit risus elementum mauris malesuada.',
		linkPath: ''
	},
];