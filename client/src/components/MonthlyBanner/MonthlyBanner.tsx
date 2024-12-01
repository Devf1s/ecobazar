import { FC } from 'react';
import { targetTimes } from '@/data/timer';
import { monthlyBanner } from '@/data/monthlyBanner';
import Container from '@/components/common/Container';
import ShopButton from '@/components/Buttons/ShopButton/ShopButton';
import Timer from '@/components/common/Timer/Timer';
import styles from './MonthlyBanner.module.scss';

const MonthlyBanner: FC = () => {
	return (
		<div className={styles.wrapper}>
			<Container>
				<div
					className={`${styles.banner} bg-image`}
					style={{ backgroundImage: `url(${monthlyBanner.bgImage})` }}
				>
					<div className={styles.content}>
						<p className={styles.label}>
							{monthlyBanner.label}
						</p>
						<h3 className={styles.title}>
							Sale of the Month
						</h3>
						<div className={styles.discount}>
							<span>{monthlyBanner.discount}</span> Off
						</div>
						<Timer
							customStyles={styles}
							targetDate={targetTimes.saleOfTheMonth}
						/>
						<ShopButton
							background='green'
							size='sm'
						/>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default MonthlyBanner;