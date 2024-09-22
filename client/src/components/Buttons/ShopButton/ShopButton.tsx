import { FC } from 'react';
import { Link } from 'react-router-dom';
import { RouteNames } from '@/consts/routes';
import { ReactComponent as GreenArrow } from '@images/controls/green-arrow.svg';
import classNames from 'classnames';
import styles from './ShopButton.module.scss';

interface ShopButtonWithBgProps {
	background: 'transparent' | 'white' | 'green';
	size: 'sm' | 'md' | 'lg';
}

interface ShopButtonNoBgProps {
	background?: 'transparent';
	size?: never;
}

type ShopButtonProps = ShopButtonWithBgProps | ShopButtonNoBgProps;

const ShopButton: FC<ShopButtonProps> = ({ background = 'transparent', size }) => {
	const buttonClass = classNames(
		styles.button,
		background !== 'transparent' && styles.bg,	
		background && styles[`bg-${background}`],	
		size ? styles[`button-${size}`] : ''
	);

	return (
		<Link
			to={RouteNames.SHOP_ROUTE}
			className={buttonClass}
		>
			Shop now
			<GreenArrow className={styles.arrow} />
		</Link>
	)
}
export default ShopButton;