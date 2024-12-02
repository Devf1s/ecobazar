import { FC } from 'react';
import Navbar from './Navbar/Navbar';
import TopBar from './TopBar/TopBar';
import MainHeader from './MainHeader/MainHeader';
import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<TopBar />
			<MainHeader />
			<Navbar />
		</header>
	)
}
export default Header;