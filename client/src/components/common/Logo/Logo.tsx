import { FC } from 'react';
import { logo } from '@images/images';
import classNames from 'classnames';
import styles from './Logo.module.scss';

interface LogoProps {
	color?: 'black' | 'white';
}

const Logo: FC<LogoProps> = ({ color = 'black' }) => {
	return (
		<div className={classNames(styles.logo, {
			[styles['logo--black']]: color === 'black',
			[styles['logo--white']]: color === 'white',
		})}>
			<img src={logo} alt="Logo" />
			<p>Ecobazar</p>
		</div>
	)
}
export default Logo;