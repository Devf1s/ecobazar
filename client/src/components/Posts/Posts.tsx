import { FC } from 'react';
import { posts } from '@/data/posts';
import Container from '@/components/common/Container';
import PostItem from './PostItem/PostItem';
import styles from './Posts.module.scss';

const Posts: FC = () => {
	return (
		<div className={styles.posts}>
			<Container>
				<h2 className={`${styles.title} title`}>
					Follow Us Instagram
				</h2>
				<div className={styles.container}>
					{posts.map(post =>
						<PostItem key={post.id} post={post} />
					)}
				</div>
			</Container>
		</div>
	)
}
export default Posts;