import { FC } from 'react';
import { Bag } from '@/assets/images/components';
import styles from './ProductButton.module.scss';
import classNames from 'classnames';

interface ProductButtonProps {
	size: 'small' | 'medium';
}

const ProductButton: FC<ProductButtonProps> = ({ size }) => {
	return (
		<button
			className={classNames(
				styles.button,
				size === 'small' ? styles.small : styles.medium
			)}
		>
			<span>Add to Cart</span> <Bag />
		</button>
	)
}
export default ProductButton;