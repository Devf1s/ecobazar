import { FC } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useSelector } from 'react-redux';

const Auth: FC = () => {
	// const { isAuth } = useSelector((state) => state.user);
	return (
		<>
			<Breadcrumb />
			{/* {isAuth} */}
		</>
	)
}
export default Auth;