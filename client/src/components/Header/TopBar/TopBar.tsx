import { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/common/Container';
import { dropdown, pin } from '@images/images';
import styles from './TopBar.module.scss';
import { RouteNames } from '@/consts/routes';

const TopBar: FC = () => {
	return (
		<div className={styles.topBar}>
			<Container>
				<div className={styles.between}>
					<div className={styles.location}>
						<img src={pin} alt='Pin' />
						<p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
					</div>
					<div className={styles.userOptions}>
						<div className={`${styles.dropdown} ${styles.language}`}>
							Eng <img src={dropdown} alt='Dropdown' />
						</div>
						<div className={`${styles.dropdown} ${styles.currency}`}>
							USD <img src={dropdown} alt='Dropdown' />
						</div>
						<div className={styles.divider}></div>
						<div className={styles.authLinks}>
							<Link to={RouteNames.LOGIN_ROUTE}>Sign In</Link>
							<span>/</span>
							<Link to={RouteNames.REGISTER_ROUTE}>Sign Up</Link>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default TopBar;