import { FC, ChangeEvent, KeyboardEvent, useState } from 'react';
import Container from '@/components/common/Container';
import Logo from '@/components/common/Logo/Logo';
import { bag, heart } from '@images/images';
import styles from './MainHeader.module.scss';

const MainHeader: FC = () => {
	const [value, setValue] = useState<string>('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			console.log(value);
			setValue('');
		}
	}

	return (
		<div className={styles.mainHeader}>
			<Container>
				<div className={styles.between}>
					<Logo />
					<div className={styles.search}>
						<input
							type='search'
							name='search'
							placeholder='Search'
							className={styles.searchBar}
							value={value}
							onChange={handleChange}
							onKeyDown={handleKeyDown}
						/>
						<button
							type='submit'
							className={styles.searchBtn}
						>
							Search
						</button>
					</div>
					<div className={styles.shopping}>
						<button className={styles.wishlist}>
							<img src={heart} alt='Wishlist' />
						</button>
						<div className={styles.divider}></div>
						<div className={styles.cart}>
							<button className={styles.cartIcon}>
								<img src={bag} alt='Shopping cart' />
								<div className={styles.cartBadge}>
									<span>2</span>
								</div>
							</button>
							<div className={styles.cartInfo}>
								<p>Shopping cart:</p>
								<span>$57.00</span>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default MainHeader;