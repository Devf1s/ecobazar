import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login/Login';
import Shop from '@/pages/shop/Shop';
import Error from '@/pages/error/Error';

// const Page = lazy(() => import(''));
// const Login = lazy(() => import(''));
// const Error = lazy(() => import(''));

interface Route {
	path: string;
	element: React.ElementType;
}

export enum RouteNames {
	HOME_ROUTE = '/',
	SHOP_ROUTE = '/shop',
	LOGIN_ROUTE = '/login',
	LOGOUT_ROUTE = '/logout',
	REGISTER_ROUTE = '/register',
	ERROR_ROUTE = '/error'
}

export const guestRoutes: Route[] = [
	{
		path: RouteNames.LOGIN_ROUTE,
		element: Login
	},
];

export const authRoutes: Route[] = [
	{
		path: RouteNames.HOME_ROUTE,
		element: Home
	},
	{
		path: RouteNames.SHOP_ROUTE,
		element: Shop
	},
	{
		path: RouteNames.ERROR_ROUTE,
		element: Error
	},
];