import { chineseCabbage } from '@/assets/images/productGallery';
import { ProductGallery } from '@/types/slider/ProductGallery';

export const productGallery: ProductGallery[] = [
	{
		productId: 1,
		images: [
			{
				id: 1,
				src: chineseCabbage.image1, 
				srcMain: chineseCabbage.mainImage1,
				alt: 'Chinese Cabbage'
			},
			{
				id: 2,
				src: chineseCabbage.image2,
				srcMain: chineseCabbage.mainImage2,
				alt: 'Chinese Cabbage'
			},
			{
				id: 3,
				src: chineseCabbage.image3,
				srcMain: chineseCabbage.mainImage3,
				alt: 'Chinese Cabbage'
			},
			{
				id: 4,
				src: chineseCabbage.image4,
				srcMain: chineseCabbage.mainImage4,
				alt: 'Chinese Cabbage'
			}
		],
		selectedImage: {
			id: 1,
			src: chineseCabbage.image1, 
			srcMain: chineseCabbage.mainImage1,
			alt: 'Chinese Cabbage'
		}
	},
];