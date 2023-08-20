import { createBrowserRouter } from 'react-router-dom';

import { routes } from './constants';
import { HomePage, SignupPage, LoginPage, UsersPage } from '~pages/index';

export const router = createBrowserRouter([
	{
		path: routes.root,
		element: <HomePage />,
		children: [
			{
				path: routes.users,
				element: <UsersPage />,
			},
			{
				path: routes.signup,
				element: <SignupPage />,
			},
			{
				path: routes.login,
				element: <LoginPage />,
			},
		],
	},
]);
