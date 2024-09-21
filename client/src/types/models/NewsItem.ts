export enum categories {
	FOOD = 'Food',
	// ...
};

export enum authors {
	ADMIN = 'Admin',
	USER = 'User',
	GUEST = 'Guest'
};

export interface NewsItem {
	id: number;
	day: number;
	month: string;
	image: string;
	category: categories;
	author: authors;
	commentsCount: number;
	title: string;
	linkPath: string;
}