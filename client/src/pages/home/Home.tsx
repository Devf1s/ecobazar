import { FC } from 'react';
import Hero from '@/components/Hero/Hero';
import Container from '@/components/common/Container';
import styles from './Home.module.scss';

const Home: FC = () => {
	return (
		<main className={styles.home}>
			<Container>
				<Hero />
			</Container>
		</main>
	)
}
export default Home;