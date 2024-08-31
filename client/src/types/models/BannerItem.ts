interface MainBannerItem {
	id: number;
	type: 'main';
	bgImage: string;
	title: string; 
	description: string;
	discount: string;
	btnText: string;
}

interface SideBannerItem {
	id: number;
	type: 'side';
	bgImage: string;
	label?: string;
	title?: string; 
	description?: string;
	discount?: string;
	btnText: string;
}

export type { MainBannerItem, SideBannerItem };