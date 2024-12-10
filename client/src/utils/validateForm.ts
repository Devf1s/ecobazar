export const validateEmail = (value: string): boolean => {
	const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return EMAIL_REGEX.test(value);
};

export const validatePassword = (value: string): boolean => {
	const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
	return PWD_REGEX.test(value);
};

export const validateConfirmPwd = (password: string, confirmPwd: string): boolean => {
	return validatePassword(confirmPwd) && password === confirmPwd;
};

export const onSuccess = (
	inputs: { value: string; setValue: (value: string) => void }[],
	message: string
) => {
	inputs.every(input => input.setValue(''));
	alert(message);
};