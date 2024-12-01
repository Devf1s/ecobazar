import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '@/consts/routes';
import notFound from '@images/error/not-found.png';
import styles from './Error.module.scss';

const Error: FC = () => {
	const navigate = useNavigate();

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.title}>
					<img 
						src={notFound} 
						alt='Not Found'
						className={styles.img}
					 />
					<h1 className={styles.title}>
						Oops! page not found
					</h1>
					<p className={styles.description}>
						It seems we've hit a dead end. The page you requested couldn't be found, but don't worry, there's plenty more to explore on our site
					</p>
					<button
						className={styles.btn}
						onClick={() => navigate(RouteNames.HOME_ROUTE)}
					>
						Back to Home
					</button>
				</div>
			</div>
		</div>
	)
}
export default Error;