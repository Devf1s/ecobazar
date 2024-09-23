import { FC } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { RouteNames, guestRoutes, authRoutes } from '@/consts/routes';
import { useAppSelector } from '@/hooks/redux';

const AppRouter: FC = () => {
	const { isAuth } = useAppSelector(state => state.user);

	return (
		isAuth ?
			<Routes>
				{authRoutes.map(route =>
					<Route
						key={route.path}
						path={route.path}
						element={<route.element />}
					/>
				)}
				<Route path='*' element={<Navigate to={RouteNames.ERROR_ROUTE} replace />} />
			</Routes>
			:
			<Routes>
				{guestRoutes.map(route =>
					<Route
						key={route.path}
						path={route.path}
						element={<route.element />}
					/>
				)}
				<Route path='*' element={<Navigate to={RouteNames.LOGIN_ROUTE} replace />} />
			</Routes>
	)
}
export default AppRouter;