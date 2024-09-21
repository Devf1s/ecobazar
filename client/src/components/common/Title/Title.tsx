import { FC } from 'react';
import { Link } from 'react-router-dom';
import { GreenArrow } from '@images/components';
import { RouteNames } from '@/consts/routes';
import styles from './Title.module.scss';

interface TitleProps {
	text: string;
}

const Title: FC<TitleProps> = ({ text }) => {
	return (
		<div className={styles.title}>
			<h2 className='title'>{text}</h2>
			<Link to={RouteNames.SHOP_ROUTE}>
				View All <GreenArrow className={styles.arrow} />
			</Link>
		</div>
	)
}
export default Title;