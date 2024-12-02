import { FC, useState } from 'react';
import classNames from 'classnames';
import { tags } from '@/data/filter/tags';
import styles from './TagFilter.module.scss';

const TagFilter: FC = () => {
	const [activeTags, setActiveTags] = useState<number[]>([]);

	const toggleTag = (tagId: number) => {
		setActiveTags(prev =>
			prev.includes(tagId)
				? prev.filter(id => id !== tagId)
				: [...prev, tagId]
		);
	};

	return (
		<div className={styles.tagFilter}>
			<div className={styles.container}>
				<ul className={styles.tagItems}>
					{tags.map(tag =>
						<li
							key={tag.id}
							className={styles.tagItem}
						>
							<button
								onClick={() => toggleTag(tag.id)}
								className={classNames(styles.tagBtn, {
									[styles.active]: activeTags.includes(tag.id)
								})}
							>
								{tag.name}
							</button>
						</li>
					)}
				</ul>
			</div>
		</div >
	)
}
export default TagFilter;