import { FC, ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Modal.module.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				onClose();
			}
		};
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div className={classNames(styles.modal, { [styles.open]: isOpen })}>
			<div 
				onClick={handleClick} 
				className={styles.inner}
			>
				{children}	
			</div>
		</div>
	)
}
export default Modal;