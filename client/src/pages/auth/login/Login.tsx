import { FC, FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/redux';
import { setIsAuth } from '@/store/reducers/userSlice';
import { useInput } from '@/hooks/useInput';
import { RouteNames } from '@/consts/routes';
import { ErrorMessages } from '@/consts/errorMessages';
import { onSuccess, validateEmail, validatePassword } from '@/utils/validateForm';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Newsletter from '@/components/Newsletter/Newsletter';
import EmailInput from '@/components/controls/Inputs/EmailInput';
import PasswordInput from '@/components/controls/Inputs/PasswordInput';
import Checkbox from '@/components/controls/Checkbox/Checkbox';
import classNames from 'classnames';
import styles from './Login.module.scss';

const Login: FC = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const email = useInput();
	const password = useInput();
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [rememberMe, setRememberMe] = useState(false);

	const toggleRememberMe = () => {
		setRememberMe(prev => !prev);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitted(true);

		email.setIsValid(validateEmail(email.value));
		password.setIsValid(validatePassword(password.value));

		if (!email.isValid || !email.isValid) {
			alert(ErrorMessages.EMAIL_PWD_REGEX);
			return;
		}
		onSuccess([email, password], 'Login success!');
		dispatch(setIsAuth(true));
		navigate('/');
	};

	return (
		<>
			<Breadcrumb />
			<div className={styles.section}>
				<form
					onSubmit={handleSubmit}
					className={classNames(styles.form, styles.loginForm)}
				>
					<h1 className={styles.title}>
						Sign In
					</h1>
					<div className={styles.inputs}>
						<EmailInput
							id='email'
							name='Email'
							value={email.value}
							onChange={email.setValue}
							isValid={email.isValid}
							onValidate={email.setIsValid}
							isFocused={email.isFocused}
							onFocus={email.setIsFocused}
							isSubmitted={isSubmitted}
						/>
						<PasswordInput
							id='password'
							name='Password'
							value={password.value}
							onChange={password.setValue}
							isValid={password.isValid}
							onValidate={password.setIsValid}
							isFocused={password.isFocused}
							onFocus={password.setIsFocused}
							isSubmitted={isSubmitted}
						/>
					</div>
					<div className={styles.actions}>
						<Checkbox
							id='rememberMe'
							name='Remember me'
							checked={rememberMe}
							onChange={toggleRememberMe}
							label={<p className={styles.text}>Remember me</p>}
						/>
						<Link
							to={RouteNames.REGISTER_ROUTE}
							className={classNames(styles.text, styles.link)}
						>
							Forget Password
						</Link>
					</div>
					<button
						type='submit'
						className={styles.submitBtn}
					>
						Login
					</button>
					<div className={styles.footer}>
						<p className={styles.text}>
							Don’t have account?
						</p>
						<Link to={RouteNames.REGISTER_ROUTE}>
							Register
						</Link>
					</div>
				</form>
			</div>
			<Newsletter />
		</>
	)
}
export default Login;