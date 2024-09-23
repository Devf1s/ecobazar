import { FC, useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Timer.module.scss';

interface TimerProps {
	targetDate: Date;
	customStyles?: { [key: string]: string };
}

const Timer: FC<TimerProps> = ({ targetDate, customStyles }) => {
	const calculateTimeLeft = useCallback(() => {
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
	}, [targetDate]);

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timerId = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timerId);
	}, [calculateTimeLeft]);

	const timeUnits = [
		{ label: 'days', value: String(timeLeft.days).padStart(2, '0') },
		{ label: 'hours', value: String(timeLeft.hours).padStart(2, '0') },
		{ label: 'mins', value: String(timeLeft.minutes).padStart(2, '0') },
		{ label: 'secs', value: String(timeLeft.seconds).padStart(2, '0') },
	];

	return (
		<div className={classNames(styles.timer, customStyles?.timer)}>
			{timeUnits.map((unit, index) => 
				<div
					key={unit.label}
					className={classNames(styles.timerInner, customStyles?.timerInner)}
				>
					<div className={classNames(styles.timerUnit, customStyles?.timerUnit)}>
						<span className={classNames(styles.timerValue, customStyles?.timerValue)}>
							{unit.value}
						</span>
						<p className={classNames(styles.timerLabel, customStyles?.timerLabel)}>
							{unit.label}
						</p>
					</div>
					{index < timeUnits.length - 1 && (
						<div className={classNames(styles.timerColon, customStyles?.timerColon)}>
							<span></span>
							<span></span>
						</div>
					)}
				</div>
			)}
		</div>
	)
}
export default Timer;