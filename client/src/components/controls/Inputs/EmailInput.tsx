import { FC, useEffect } from 'react';
import { validateEmail } from '@/utils/validateForm';
import classNames from 'classnames';
import styles from './InputGeneral.module.scss';

interface EmailInputProps {
	id: string;
	name: string;
	value: string;
	onChange: (value: string) => void;
	isValid: boolean;
	onValidate: (isValid: boolean) => void;
	isFocused: boolean;
	onFocus: (isFocused: boolean) => void;
	isSubmitted: boolean;
}

const EmailInput: FC<EmailInputProps> = ({ 
	id, 
	name, 
	value, 
	onChange, 
	isValid, 
	onValidate,
	isFocused,
	onFocus,
	isSubmitted
}) => {
	useEffect(() => {
		onValidate(validateEmail(value));
	}, [value, onValidate]);

	return (
		<div className={styles.inputWrapper}>
			<input
				id={id}
				name={name}
				type='email'
				placeholder='Email'
				value={value}
				onChange={(e) => onChange(e.target.value)}	
				onFocus={() => onFocus(true)}
				onBlur={() => onFocus(false)}			
				className={classNames(styles.input, {
					[styles.invalid]: isSubmitted && !isValid && !isFocused
				})}
				aria-invalid={isValid ? 'false' : 'true'}
				autoComplete='off'
			/>
		</div>
	);
};
export default EmailInput;