import Home from '@/pages/home/Home';
import Shop from '@/pages/shop/Shop';
import Login from '@/pages/auth/login/Login';
import Register from '@/pages/auth/register/Register';
import Error from '@/pages/error/Error';

// const Home = lazy(() => import(''));
// const Shop = lazy(() => import(''));
// const Login = lazy(() => import(''));
// const Register = lazy(() => import(''));
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
		path: RouteNames.HOME_ROUTE,
		element: Home
	},
	{
		path: RouteNames.REGISTER_ROUTE,
		element: Register
	}
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
		path: RouteNames.LOGIN_ROUTE,
		element: Login
	},
	{
		path: RouteNames.REGISTER_ROUTE,
		element: Register
	},
	{
		path: RouteNames.ERROR_ROUTE,
		element: Error
	}
];