import { useState } from 'react';

const useModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const toggleModal = () => setIsOpen(prev => !prev);

	return {
		isOpen,
		openModal,
		closeModal,
		toggleModal
	};
};
export default useModal;