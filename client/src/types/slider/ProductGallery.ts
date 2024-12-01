export interface GalleryImage {
	id: number;
	src: string;
	srcMain: string;
	alt: string;
}

export type ImageTuple = [GalleryImage, GalleryImage, GalleryImage, GalleryImage];

export interface ProductGallery {
	productId: number;
	images: ImageTuple;
	selectedImage: GalleryImage;
}