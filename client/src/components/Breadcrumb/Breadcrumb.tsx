import { FC } from 'react';
import { RouteNames } from '@/consts/routes';
import { Link, useLocation } from 'react-router-dom';
import Container from '@/components/common/Container';
import { Home } from '@images/components';
import styles from './Breadcrumb.module.scss';

const Breadcrumb: FC = () => {
	const location = useLocation();
	const pathnames = location.pathname.split('/').filter(Boolean);

	return (
		<nav
			aria-label='breadcrumb'
			className={styles.breadcrumb}
		>
			<Container>
				<ul className={styles.breadcrumbList}>
					{pathnames.length > 0 ?
						<li className={styles.breadcrumbItem}>
							<Link to={RouteNames.HOME_ROUTE}>
								<Home />
							</Link>
						</li>
						:
						<li className={`${styles.breadcrumbItem} ${styles.active}`}>
							<Home />
						</li>
					}

					{pathnames.map((value, index) => {
						const isLast = index === pathnames.length - 1;
						const path = `/${pathnames.slice(0, index + 1).join('/')}`;

						return isLast ?
							<li
								key={path}
								className={`${styles.breadcrumbItem} ${styles.active}`}
							>
								{value}
							</li>
							:
							<li key={path} className={styles.breadcrumbItem}>
								<Link to={path}>{value}</Link>
								<span className={styles.separator}></span>
							</li>
					})}
				</ul>
			</Container>
		</nav>
	);
};
export default Breadcrumb;