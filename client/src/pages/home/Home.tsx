import { FC } from 'react';
import Hero from '@/components/Hero/Hero';
import Categories from '@/components/Categories/Categories';
import PopularProducts from '@/components/PopularProducts/PopularProducts';
import BannerCards from '@/components/BannerCards/BannerCards';
import DiscountBanner from '@/components/DiscountBanner/DiscountBanner';
import FeaturedProducts from '@/components/FeaturedProducts/FeaturedProducts';
import News from '@/components/News/News';
import Testimonials from '@/components/Testimonials/Testimonials';
import Logos from '@/components/Logos/Logos';
import Posts from '@/components/Posts/Posts';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';
import styles from './Home.module.scss';
import HotDeals from '@/components/HotDeals/HotDeals';

const Home: FC = () => {
	return (
		<main className={styles.home}>
			<Hero />
			<Categories />
			<PopularProducts />
			<BannerCards />
			<HotDeals />
			<DiscountBanner />
			<FeaturedProducts />
			<News />
			<Testimonials />
			<Logos />
			<Posts />
			<Newsletter />
			<Footer />
		</main>
	)
}
export default Home;