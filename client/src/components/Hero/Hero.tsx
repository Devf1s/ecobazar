import { FC } from 'react';
import Container from '@/components/common/Container';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import styles from './Hero.module.scss';

const Hero: FC = () => {
	return (
		<div className={styles.hero}>
			<Container>
				<Banner />
				<Features />
			</Container>
		</div>
	)
}
export default Hero;