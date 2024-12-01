interface MainBannerItem {
	id: number;
	type: 'main';
	bgImage: string;
	title: string; 
	description: string;
	discount: string;
}

interface SideBannerItem {
	id: number;
	type: 'side';
	bgImage: string;
	label?: string;
	title?: string; 
	description?: string;
	discount?: string;
}

interface SummerBannerItem {
	id: number;
	bgImage: string;
	label: string;
	discount: string; 
	text: string;
}

interface SummerBannerItem {
	id: number;
	bgImage: string;
	label: string;
	discount: string; 
	text: string;
}

interface MonthlyBannerItem {
	id: number;
	bgImage: string;
	label: string;
	discount: string; 
}

export type { 
	MainBannerItem, 
	SideBannerItem, 
	SummerBannerItem, 
	MonthlyBannerItem
};