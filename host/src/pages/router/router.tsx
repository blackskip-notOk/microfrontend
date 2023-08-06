import { createBrowserRouter } from 'react-router-dom';

import { path } from './constants';
import { LoginPage } from '~pages/login';
import { HomePage } from '~pages/home';
import { ServerInfoPage } from '~pages/serverInfo';
import { SignupPage } from '~pages/signup';

export const router = createBrowserRouter([
	{
		path: path.root,
		element: <HomePage />,
		children: [
			{
				path: path.signup,
				element: <SignupPage />,
			},
			{
				path: path.login,
				element: <LoginPage />,
			},
			{
				path: path.serverInfo,
				element: <ServerInfoPage />,
			},
		],
	},
]);
