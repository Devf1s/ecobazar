import { 
	FC, 
	useEffect, 
	useState, 
	useRef, 
	ChangeEvent, 
	Dispatch, 
	SetStateAction 
} from 'react';
import styles from './RangeSlider.module.scss';

interface RangeSliderProps {
	min: number;
	max: number;
	step?: number;
	value: number[];
	onChange?: Dispatch<SetStateAction<number[]>>;
	// customStyles?: { [key: string]: string };
}

const RangeSlider: FC<RangeSliderProps> = ({
	min, max, step = 1, value, onChange
}) => {
	const [minValue, setMinValue] = useState(value[0]);
	const [maxValue, setMaxValue] = useState(value[1]);

	const trackRef = useRef<HTMLDivElement | null>(null);
	const minInputRef = useRef<HTMLInputElement | null>(null);
	const maxInputRef = useRef<HTMLInputElement | null>(null);

	const zIndexMin = '10';
	const zIndexMax = '20';

	useEffect(() => {
		if (trackRef && trackRef.current) {
			const minLeft = `${((minValue - min) / (max - min)) * 100}%`;
			const maxRight = `${((max - maxValue) / (max - min)) * 100}%`;

			trackRef.current.style.left = minLeft;
			trackRef.current.style.right = maxRight;
		}
	}, [max, maxValue, min, minValue]);

	const handleMinChange = (event?: ChangeEvent<HTMLInputElement>) => {
		if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
			minInputRef.current.style.zIndex = zIndexMax;
			maxInputRef.current.style.zIndex = zIndexMin;
		}
		
		const value = Number(event?.target.value);
		if (value <= maxValue) {
			setMinValue(value);
			onChange?.([value, maxValue]);
		}
	};

	const handleMaxChange = (event?: ChangeEvent<HTMLInputElement>) => {
		if (minInputRef && minInputRef.current && maxInputRef && maxInputRef.current) {
			minInputRef.current.style.zIndex = zIndexMin;
			maxInputRef.current.style.zIndex = zIndexMax;
		}

		const value = Number(event?.target.value);
		if (value >= minValue) {
			setMaxValue(value);
			onChange?.([minValue, value]);
		}
	};

	return (
		<div className={styles.rangeSlider}>
			<div className={styles.sliderWrapper}>
				<input
					type='range'
					ref={minInputRef}
					min={min}
					max={max}
					step={step}
					value={minValue}
					onChange={handleMinChange}
					className={`${styles.rangeInput} ${styles.min}`}
				/>
				<input
					type='range'
					ref={maxInputRef}
					min={min}
					max={max}
					step={step}
					value={maxValue}
					onChange={handleMaxChange}
					className={`${styles.rangeInput} ${styles.max}`}
				/>
				<div
					ref={trackRef}
					className={styles.rangeTrack}
				/>
			</div>
			<div className={styles.info}>
				Price: <span>${minValue} — {maxValue}</span>
			</div>
		</div>
	);
};
export default RangeSlider;