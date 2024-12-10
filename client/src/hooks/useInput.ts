import { useState } from 'react';

export const useInput = () => {
	const [value, setValue] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(false);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	return {
		value,
		isValid,
		isFocused,
		setValue,
		setIsValid,
		setIsFocused
	};
};