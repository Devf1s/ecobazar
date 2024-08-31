import { FC } from 'react';
import { mainBanners, sideBanners } from '@/config/banners';
import { greenArrow } from '@/assets/images';
import styles from './Banner.module.scss';

const Banner: FC = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.container}>
				{mainBanners.map(mainBanner =>
					<div
						key={mainBanner.id}
						className={styles.mainItem}
						style={{ backgroundImage: `url(${mainBanner.bgImage})` }}
					>
						<div className={styles.mainContent}>
							<h2 className={styles.mainTitle}>
								{mainBanner.title}
							</h2>
							<div className={styles.mainDiscount}>
								<p className={styles.mainSale}>
									Sale up to
									<span className={styles.mainBadge}>
										{mainBanner.discount} OFF
									</span>
								</p>
								<p className={styles.mainDesc}>
									{mainBanner.description}
								</p>
							</div>
							<button className={`${styles.mainBtn} ${styles.btn}`}>
								{mainBanner.btnText}
								<img src={greenArrow} alt='Green Arrow' />
							</button>
						</div>
					</div>
				)}
				<div className={styles.sideContainer}>
					{sideBanners.map(sideBanner =>
						<div
							key={sideBanner.id}
							className={
								[styles.sideItem, sideBanner.id === 2 && styles.sideItemCenter]
									.filter(Boolean)
									.join(' ')
							}
							style={{ backgroundImage: `url(${sideBanner.bgImage})` }}
						>
							<span className={styles.sideLabel}>
								{sideBanner.label}
							</span>
							{sideBanner.discount &&
								<p className={styles.sideDiscount}>
									{sideBanner.discount} Off
								</p>
							}
							{sideBanner.title &&
								<h2 className={styles.sideTitle}>
									{sideBanner.title}
								</h2>
							}
							{sideBanner.description &&
								<p className={styles.sideDesc}>
									{sideBanner.description}
								</p>
							}
							<button className={`${styles.sideBtn} ${styles.btn}`}>
								{sideBanner.btnText}
								<img src={greenArrow} alt='Green Arrow' />
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
export default Banner;