import { FC } from 'react';
import { news } from '@/data/news';
import Container from '@/components/common/Container';
import NewsItem from './NewsItem/NewsItem';
import styles from './News.module.scss';

const News: FC = () => {
	return (
		<div className={styles.news}>
			<Container>
				<h2 className={`${styles.title} title`}>
					Latest News
				</h2>
				<div className={styles.container}>
					{news.map(item =>
						<NewsItem
							key={item.id}
							item={item}
						/>
					)}
				</div>
			</Container>
		</div>
	)
}
export default News;