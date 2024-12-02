import { FC } from 'react';
import Container from '@/components/common/Container';
import SocialLinks from '@/components/common/SocialLinks/SocialLinks';
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
							placeholder='Your email address'
						/>
						<button
							type='submit'
							className={styles.button}
						>
							Subscribe
						</button>
					</div>
					<SocialLinks />
				</div>
			</Container>
		</div>
	)
}
export default Newsletter;