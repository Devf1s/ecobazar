import { useState, useCallback } from 'react';

const useCounter = (initialValue: number = 1, min: number = 1, max: number = 99) => {
	const [count, setCount] = useState<number>(initialValue);
	// const isIncrement = count >= max;
	// const isDecrement = count <= min;

	const increment = useCallback(() => {
		if (count < max) setCount(prev => prev + 1);
	}, [count, max]);

	const decrement = useCallback(() => {
		if (count > min) setCount(prev => prev - 1);
	}, [count, min]);

	return {
		count,
		increment,
		decrement,
		isIncrement: count >= max,
		isDecrement: count <= min,
	};
};
export default useCounter;