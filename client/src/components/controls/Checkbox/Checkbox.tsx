import { FC, ChangeEvent, ReactNode } from 'react';
import { check } from '@images/images';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

interface CheckboxProps {
	id: string;
	name: string;
	label?: ReactNode | string;
	checked: boolean;
	onChange: () => void;
	customStyles?: { [key: string]: string }
}

const Checkbox: FC<CheckboxProps> = ({ id, name, label, checked, onChange, customStyles }) => {
	return (
		<label 
			htmlFor={id} 
			className={classNames(
				styles.checkbox,
				customStyles?.checkbox
			)}
		>
			<input
				id={id}
				name={name}
				type='checkbox'
				checked={checked}
				onChange={onChange}
			/>
			<div className={styles.customCheckbox}>
				<img src={check} alt='Check' />
			</div>
			{label &&
				<div className={classNames(
					styles.label,
					customStyles?.label
				)}>
					{label}
				</div>
			}
		</label>
	);
};
export default Checkbox;