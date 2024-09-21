import { FC } from 'react';
import { LogoItem as LogoItemType } from '@/types/models/LogoItem';
import styles from './LogoItem.module.scss';

interface LogoItemProps {
	logo: LogoItemType;
}

const LogoItem: FC<LogoItemProps> = ({ logo }) => {
	const { Icon } = logo;

	return (
		<div className={styles.logo}>
			<Icon className={styles.icon} />
		</div>
	)
}
export default LogoItem;