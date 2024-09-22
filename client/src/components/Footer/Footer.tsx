import { FC } from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '@/data/footerLinks';
import { paymentCards } from '@/data/paymentCards';
import { generateImageAlt } from '@/utils/imageAlt';
import Container from '@/components/common/Container';
import Logo from '@/components/common/Logo/Logo';
import discover from '@images/payment/discover.svg';
import classNames from 'classnames';
import styles from './Footer.module.scss';

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.footerTop}>
					<div className={styles.content}>
						<Logo color='white' />
						<p className={`${styles.contentText} ${styles.text}`}>
							Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
						</p>
						<div className={styles.contacts}>
							<a href='tel:+2195550114' className={styles.contactsLink}>
								(219) 555-0114
							</a>
							<span>or</span>
							<a href='mailto:Proxy@gmail.com' className={styles.contactsLink}>
								Proxy@gmail.com
							</a>
						</div>
					</div>
					<div className={styles.categories}>
						{footerLinks.map(category =>
							<div
								key={category.category}
								className={styles.category}
							>
								<h4 className={styles.categoryTitle}>
									{category.category}
								</h4>
								<ul className={styles.categoryList}>
									{category.links.map(link => (
										<li
											key={link.title}
											className={styles.categoryItem}
										>
											<Link
												to={link.url}
												className={styles.categoryLink}
											>
												{link.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
				<div className={styles.footerBottom}>
					<p className={`${styles.copyright} ${styles.text}`}>
						Ecobazar eCommerce &copy; 2021. All Rights Reserved
					</p>
					<ul className={styles.paymentCards}>
						{paymentCards.map(card =>
							<li
								key={card.id}
								className={classNames(
									styles.paymentCard, 
									{ [styles.discoverCard]: card.image === discover }
								)}
							>
								<img
									src={card.image}
									alt={generateImageAlt(card.image)}
									className={styles.paymentImg}
								/>
							</li>
						)}
					</ul>
				</div>
			</Container>
		</footer>
	)
}
export default Footer;