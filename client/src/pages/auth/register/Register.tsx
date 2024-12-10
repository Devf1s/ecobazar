import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsAuth } from '@/store/reducers/userSlice';
import { useInput } from '@/hooks/useInput';
import { RouteNames } from '@/consts/routes';
import { ErrorMessages } from '@/consts/errorMessages';
import { onSuccess, validateConfirmPwd, validateEmail, validatePassword } from '@/utils/validateForm';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Newsletter from '@/components/Newsletter/Newsletter';
import EmailInput from '@/components/controls/Inputs/EmailInput';
import PasswordInput from '@/components/controls/Inputs/PasswordInput';
import Checkbox from '@/components/controls/Checkbox/Checkbox';
import classNames from 'classnames';
import styles from './Register.module.scss';

const Register: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const email = useInput();
	const password = useInput();
	const confirmPwd = useInput();
	const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
	const [acceptTerms, setAcceptTerms] = useState<boolean>(false);

	const toggleAcceptTerms = () => setAcceptTerms(prev => !prev);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitted(true);

		email.setIsValid(validateEmail(email.value));
		password.setIsValid(validatePassword(password.value));
		confirmPwd.setIsValid(validateConfirmPwd(password.value, confirmPwd.value));

		if (!email.isValid || !password.isValid) {
			alert(ErrorMessages.EMAIL_PWD_REGEX);
			return;
		}
		if (!confirmPwd.isValid) {
			alert(ErrorMessages.MATCH_PWDS);
			return;
		}
		if (!acceptTerms) {
			alert('Please accept the Terms and Conditions to proceed.');
			return;
		}
		onSuccess([email, password, confirmPwd], 'Register success!');
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
						Sign Up
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
						<PasswordInput
							id='confirmPassword'
							name='Confirm password'
							placeholder='Confirm Password'
							value={confirmPwd.value}
							onChange={confirmPwd.setValue}
							isValid={confirmPwd.isValid}
							onValidate={confirmPwd.setIsValid}
							isFocused={confirmPwd.isFocused}
							onFocus={confirmPwd.setIsFocused}
							isSubmitted={isSubmitted}
						/>
					</div>
					<div className={styles.actions}>
						<Checkbox
							id='acceptAll'
							name='Accept all terms'
							checked={acceptTerms}
							onChange={toggleAcceptTerms}
							label={<p className={styles.text}>Accept all terms & Conditions</p>}
						/>
					</div>
					<button
						type='submit'
						className={styles.submitBtn}
					>
						Create Account
					</button>
					<div className={styles.footer}>
						<p className={styles.text}>
							Already have account?
						</p>
						<Link to={RouteNames.LOGIN_ROUTE}>
							Login
						</Link>
					</div>
				</form>
			</div>
			<Newsletter />
		</>
	)
}
export default Register;