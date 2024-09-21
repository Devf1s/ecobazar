export interface BannerCard {
	id: number;
	bgImage: string;
	label: string;
	title: string;    
	text?: string;    
	isTimer: boolean;   
	isDarkStyle?: boolean;
	discount?: string;
	price?: string;
}