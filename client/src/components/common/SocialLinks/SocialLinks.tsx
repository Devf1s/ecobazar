import { FC } from 'react';
import { Link } from 'react-router-dom';
import { socialItems } from '@/data/socialLinks';
import styles from './SocialLinks.module.scss';

const SocialLinks: FC = () => {
	return (
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
	)
}
export default SocialLinks;