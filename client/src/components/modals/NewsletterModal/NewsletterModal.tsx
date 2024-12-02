import { FC, useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Modal from '@/components/common/Modal/Modal';
import Checkbox from '@/components/controls/Checkbox/Checkbox';
import products from '@images/newsletter/products.jpg';
import { Close } from '@images/components';
import styles from './NewsletterModal.module.scss';

const NewsletterModal: FC = () => {
	const { isOpen, openModal, closeModal } = useModal();
	const [isChecked, setIsChecked] = useState<boolean>(false);

	const handleChange = () => {
		setIsChecked(prev => !prev);
	}

	useEffect(() => {
		if (!isOpen) {
			const timer = setTimeout(() => {
				openModal();
			}, 5000);

			return () => clearTimeout(timer);
		}
	});

	return (
		<Modal
			isOpen={isOpen}
			onClose={closeModal}
		>
			<div className={styles.content}>
				<div className={styles.between}>
					<div className={styles.image}>
						<img
							src={products}
							alt='Products'
						/>
					</div>
					<div className={styles.details}>
						<button
							onClick={closeModal}
							className={styles.modalClose}
						>
							<Close />
						</button>
						<h2 className={styles.title}>
							Subcribe to Our Newsletter
						</h2>
						<p className={styles.text}>
							Subscribe to our newlletter and Save your <span>20% money</span> with discount code today.
						</p>
						<div className={styles.inputWrapper}>
							<input
								type='email'
								className={styles.email}
								placeholder='Enter your email'
							/>
							<button
								type='submit'
								className={styles.button}
							>
								Subscribe
							</button>
						</div>
						<div className={styles.center}>
							<Checkbox
								id='showWindow'
								name='Show Window'
								checked={isChecked}
								onChange={handleChange}
								label='Do not show this window'
							/>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	)
}
export default NewsletterModal;