import { FC } from 'react';
import styles from './Login.module.scss';

const Login: FC = () => {
	return (
		<div className={styles.login}>
			<h1 className={styles.title}>
				Sign In
			</h1>
		</div>
	)
}
export default Login;