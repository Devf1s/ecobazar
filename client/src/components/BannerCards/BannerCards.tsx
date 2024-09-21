import { FC } from 'react';
import { bannerCards } from '@/data/bannerCards';
import { targetTimes } from '@/data/timer';
import Container from '@/components/common/Container';
import Timer from '@/components/common/Timer/Timer';
import ShopButton from '@/components/Buttons/ShopButton/ShopButton';
import classNames from 'classnames';
import styles from './BannerCards.module.scss';

const BannerCards: FC = () => {
	return (
		<div className={styles.banners}>
			<Container>
				<div className={styles.container}>
					{bannerCards.map(banner =>
						<div
							key={banner.id}
							className={classNames(
								styles.banner,
								{ [styles.bannerDark]: banner.isDarkStyle },
								'bg-image'
							)}
							style={{ backgroundImage: `url(${banner.bgImage})` }}
						>
							<p className={styles.bannerLabel}>
								{banner.label}
							</p>
							<h3 className={styles.bannerTitle}>
								{banner.title}
							</h3>
							{banner.text &&
								<p className={styles.bannerText}>
									{banner.text}
									{banner.price ?
										<span className={styles.bannerPrice}>
											{banner.price}
										</span>
										:
										<span className={styles.bannerDiscount}>
											{banner.discount}
										</span>
									}
								</p>
							}
							{banner.isTimer &&
								<Timer targetDate={targetTimes.saleOfTheMonth} />
							}
							<ShopButton
								background='white'
								size='sm'
							/>
						</div>
					)}
				</div>
			</Container>
		</div>
	)
}
export default BannerCards;