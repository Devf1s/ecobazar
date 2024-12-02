import { FC } from 'react';
import { PageArrow } from '@/assets/images/components';
import styles from './Pagination.module.scss';

const Pagination: FC = () => {
	return (
		<div className={styles.pagination}>
			<div className={styles.inner}>
				<ul className={styles.items}>
					<button className={`
						${styles.btn} 
						${styles.prev}
					`}>
						<PageArrow />
					</button>
					<li className={styles.item}>
						<button
							onClick={() => console.log('item btn')}
							className={styles.btn}
						>
							1
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={() => console.log('item btn')}
							className={styles.btn}
						>
							2
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={() => console.log('item btn')}
							className={styles.btn}
						>
							3
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={() => console.log('item btn')}
							className={styles.btn}
						>
							4
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={() => console.log('item btn')}
							className={styles.btn}
						>
							5
						</button>
					</li>
					<button className={`
						${styles.btn} 
						${styles.next} 
						${styles.active}
					`}>
						<PageArrow />
					</button>
				</ul>
			</div>
		</div>
	)
}
export default Pagination;