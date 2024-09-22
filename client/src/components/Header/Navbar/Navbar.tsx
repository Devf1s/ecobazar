import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@/components/common/Container';
import { navItems } from '@/data/navigation';
import { ArrowDown } from '@images/components';
import { phone } from '@images/images';
import styles from './Navbar.module.scss';

const Navbar: FC = () => {
	return (
		<div className={styles.navbar}>
			<Container>
				<div className={styles.between}>
					<ul className={styles.list}>
						{navItems.map(item =>
							<li
								key={item.title}
								className={styles.item}
							>
								<NavLink
									to={item.to}
									className={styles.link}
								>
									{item.title}
									{item.isDropdown &&
										<div className={styles.arrow}>
											<ArrowDown />
										</div>
									}
								</NavLink>
							</li>
						)}
					</ul>
					<div className={styles.phone}>
						<a
							href="tel:+12195550114"
							className={styles.phoneLink}
						>
							<img
								src={phone}
								alt='Phone'
							/>
							(219) 555-0114
						</a>
					</div>
				</div>
			</Container>
		</div>
	)
}
export default Navbar;