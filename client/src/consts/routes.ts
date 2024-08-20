import Home from '../pages/home/Home';
import Login from '../pages/login/Login';

// const Page = lazy(() => import(''));

interface Route {
	path: string;
	element: React.ElementType;
}

export enum RouteNames {
	HOME = '/home',
	LOGIN = '/login',
}

export const guestRoutes: Route[] = [
	{
		path: RouteNames.LOGIN,
		element: Login
	},
];

export const authRoutes: Route[] = [
	{
		path: RouteNames.HOME,
		element: Home
	},
];