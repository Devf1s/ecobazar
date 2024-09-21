import { FC } from 'react';
import { NewsItem as NewsItemType } from '@/types/models/NewsItem';
import ShopButton from '@/components/Buttons/ShopButton/ShopButton';
import { generateImageAlt } from '@/utils/imageAlt';
import { tag, user, chat } from '@images/images';
import styles from './NewsItem.module.scss';

interface NewsItemProps {
	item: NewsItemType;
}

const NewsItem: FC<NewsItemProps> = ({ item }) => {
	const shortMonth = item.month.slice(0, 3);
	const imageAlt = generateImageAlt(item.image);
	const metadataAlts = {
		category: generateImageAlt(tag),
		author: generateImageAlt(user),
		comments: generateImageAlt(chat)
	};

	return (
		<div className={styles.item}>
			<div className={styles.img}>
				<img
					src={item.image}
					alt={imageAlt}
				/>
				<div className={styles.date}>
					<span className={styles.day}>
						{item.day}
					</span>
					<p className={styles.month}>
						{shortMonth}
					</p>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.metadata}>
					<div className={`${styles.metadataItem} ${styles.category}`}>
						<img
							src={tag}
							alt={metadataAlts.category}
							className={styles.metadataIcon}
						/>
						<p>{item.category}</p>
					</div>
					<div className={`${styles.metadataItem} ${styles.author}`}>
						<img
							src={user}
							alt={metadataAlts.author}
							className={styles.metadataIcon}
						/>
						<p><span>By</span> {item.author}</p>
					</div>
					<div className={`${styles.metadataItem} ${styles.comments}`}>
						<img
							src={chat}
							alt={metadataAlts.comments}
							className={styles.metadataIcon}
						/>
						<p>{item.commentsCount} Comments</p>
					</div>
				</div>
				<h4 className={styles.title}>
					{item.title}
				</h4>
				<ShopButton />
			</div>
		</div>
	)
}
export default NewsItem;