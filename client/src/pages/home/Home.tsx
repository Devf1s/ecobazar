import { FC, useState } from 'react';
import useModal from '@/hooks/useModal';
import { ProductItem } from '@/types/models/ProductItem';
import {
	Hero,
	CategoryCards,
	PopularProducts,
	BannerCards,
	HotDeals,
	SummerBanner,
	FeaturedProducts,
	News,
	Testimonials,
	Logos,
	Posts,
	Newsletter,
	QuickViewModal,
	NewsletterModal
} from '@/components';
import styles from './Home.module.scss';

const Home: FC = () => {
	const [selectedProduct, setSelectedProduct] = useState<ProductItem | undefined>(undefined);
	const { isOpen, closeModal, openModal } = useModal();

	const handleQuickView = (product: ProductItem) => {
		setSelectedProduct(product);
		openModal();
	};

	return (
		<main className={styles.home}>
			<Hero />
			<CategoryCards />
			<PopularProducts onQuickView={handleQuickView} />
			<BannerCards />
			<HotDeals onQuickView={handleQuickView} />
			<SummerBanner />
			<FeaturedProducts onQuickView={handleQuickView} />
			<News />
			<Testimonials />
			<Logos />
			<Posts />
			<Newsletter />
			<QuickViewModal
				isOpen={isOpen}
				closeModal={closeModal}
				product={selectedProduct}
			/>
			<NewsletterModal />
		</main>
	)
}
export default Home;