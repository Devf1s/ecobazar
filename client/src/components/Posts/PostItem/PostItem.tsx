import { FC } from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '@/consts/social';
import { PostItem as PostItemType } from '@/types/models/PostItem';
import { generateImageAlt } from '@/utils/imageAlt';
import instagram from '@images/posts/instagram.svg';
import styles from './PostItem.module.scss';

interface PostItemProps {
	post: PostItemType;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
	const imageAlt = generateImageAlt(post.image);

	return (
		<div className={styles.post}>
			<img 
				src={post.image} 
				alt={imageAlt} 
				className={styles.img} 
			/>
			<div className={styles.overlay}>
				<Link 
					to={socialLinks.INSTAGRAM}
					className={styles.link}
				>
					<img src={instagram} alt='Instagram' />
				</Link>
			</div>
		</div>
	)
}
export default PostItem;