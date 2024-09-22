import { FC } from 'react';
import { logos } from '@/data/logos';
import Container from '@/components/common/Container';
import LogoItem from './LogoItem/LogoItem';
import styles from './Logos.module.scss';

const Logos: FC = () => {
	return (
		<div className={styles.logos}>
			<Container>
				<div className={styles.container}>
					{logos.map(logo =>
						<LogoItem key={logo.id} logo={logo} />
					)}
				</div>
			</Container>
		</div>
	)
}
export default Logos;