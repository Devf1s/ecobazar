import { FC, useEffect, useState } from 'react';
import { generateImageAlt } from '@/utils/imageAlt';
import { validatePassword } from '@/utils/validateForm';
import { eyeOpen, eyeClosed } from '@images/images';
import classNames from 'classnames';
import styles from './InputGeneral.module.scss';

interface PasswordInputProps {
	id: string;
	name: string;
	placeholder?: string;
	value: string;
	onChange: (value: string) => void;
	isValid: boolean;
	onValidate: (isValid: boolean) => void;
	isFocused: boolean;
	onFocus: (isFocused: boolean) => void;
	isSubmitted: boolean;
}

const PasswordInput: FC<PasswordInputProps> = ({
	id,
	name,
	placeholder = 'Password',
	value,
	onChange,
	isValid,
	onValidate,
	isFocused,
	onFocus,
	isSubmitted
}) => {
	const [isShowPass, setIsShowPass] = useState<boolean>(false);
	const eyeIcon = isShowPass ? eyeClosed : eyeOpen;

	const showPassword = () => {
		setIsShowPass(prev => !prev);
	}

	useEffect(() => {
		onValidate(validatePassword(value));
	}, [value, onValidate]);

	return (
		<div className={styles.inputWrapper}>
			<input
				id={id}
				name={name}
				type={isShowPass ? 'text' : 'password'}
				placeholder={placeholder}
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
			<button
				type='button'
				onClick={showPassword}
				className={classNames(
					styles.showPassword,
					{ [styles.hidden]: !isShowPass }
				)}
			>
				<img
					src={eyeIcon}
					alt={generateImageAlt(eyeIcon)}
				/>
			</button>
		</div>
	);
};
export default PasswordInput;