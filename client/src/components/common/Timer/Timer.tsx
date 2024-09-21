import { FC, useEffect, useState } from 'react';
import styles from './Timer.module.scss';

interface TimerProps {
	targetDate: Date;
}

const Timer: FC<TimerProps> = ({ targetDate }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	function calculateTimeLeft() {
		// const difference = targetDate.getTime() - +new Date();
		const difference = targetDate.getTime() - new Date().getTime();

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			}
		} else {
			return {
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			}
		}
	}

	useEffect(() => {
		const timerId = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timerId);
	}, [targetDate]);

	const timeUnits = [
		{ label: 'days', value: String(timeLeft.days).padStart(2, '0') },
		{ label: 'hours', value: String(timeLeft.hours).padStart(2, '0') },
		{ label: 'mins', value: String(timeLeft.minutes).padStart(2, '0') },
		{ label: 'secs', value: String(timeLeft.seconds).padStart(2, '0') },
	];

	return (
		<div className={styles.timer}>
			{timeUnits.map((unit, index) =>
				<div
					key={unit.label}
					className={styles.container}
				>
					<div className={styles.timerUnit}>
						<div className={styles.timerValue}>{unit.value}</div>
						<p className={styles.timerLabel}>{unit.label}</p>
					</div>
					{index < timeUnits.length - 1 && 
						<div className={styles.colon}>
							<span></span>
							<span></span>
						</div>
					}
				</div>
			)}
		</div>
	)
}
export default Timer;