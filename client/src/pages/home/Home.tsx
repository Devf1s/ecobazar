import { FC } from 'react';
import Hero from '@/components/Hero/Hero';
import Container from '@/components/common/Container';
import Categories from '@/components/Categories/Categories';
import Products from '@/components/Products/Products';
import BannerCards from '@/components/BannerCards/BannerCards';
import DiscountBanner from '@/components/DiscountBanner/DiscountBanner';
import News from '@/components/News/News';
import Testimonials from '@/components/Testimonials/Testimonials';
import Logos from '@/components/Logos/Logos';
import Posts from '@/components/Posts/Posts';
import Newsletter from '@/components/Newsletter/Newsletter';
import Footer from '@/components/Footer/Footer';
import styles from './Home.module.scss';

const Home: FC = () => {
	return (
		<main className={styles.home}>
			<Hero />
			<Categories />
			<Products />
			<BannerCards />
			<DiscountBanner />
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