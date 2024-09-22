import { FC } from 'react';
import { Link } from 'react-router-dom';
import { socialItems } from '@/data/socialLinks';
import Container from '@/components/common/Container';
import styles from './Newsletter.module.scss';

const Newsletter: FC = () => {
	return (
		<div className={styles.newsletter}>
			<Container>
				<div className={styles.container}>
					<div className={styles.content}>
						<h2 className={styles.title}>
							Subscribe our Newsletter
						</h2>
						<p className={styles.text}>
							Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
						</p>
					</div>
					<div className={styles.inputWrapper}>
						<input
							type='email'
							className={styles.email}
						/>
						<button
							type='submit'
							className={styles.button}
						>
							Subscribe
						</button>
					</div>
					<ul className={styles.socialLinks}>
						{socialItems.map(link =>
							<li 
								key={link.id}
								className={styles.socialItem}
							>
								<Link
									to={link.path}
									className={styles.socialLink}
								>
									<link.Icon />
								</Link>
							</li>
						)}
					</ul>
				</div>
			</Container>
		</div>
	)
}
export default Newsletter;