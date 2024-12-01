import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import styles from './RadioButton.module.scss';

interface RadioButtonProps {
	id: string;
	name: string;
	label?: ReactNode | string;
	checked: boolean;
	onChange: () => void;
	customStyles?: { [key: string]: string };
}

const RadioButton: FC<RadioButtonProps> = ({ id, name, label, checked = false, onChange, customStyles }) => {
	return (
		<label 
			htmlFor={id} 
			className={classNames(
				styles.radioButton,
				customStyles?.radioButton
			)}
		>
			<input
				id={id}
				name={name}
				type='radio'
				checked={checked}
				onChange={onChange}
			/>
			<div className={classNames(
				styles.customRadio,
				customStyles?.customRadio
			)}></div>
			{label && 
				<p className={classNames(
					styles.label,
					customStyles?.label
				)}>
					{label}
				</p>
			}
		</label>
	);
};

export default RadioButton;