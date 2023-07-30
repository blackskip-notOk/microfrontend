import { createBrowserRouter } from 'react-router-dom';

import { path } from './constants';
import { LoginPage } from '~pages/login';
import { HomePage } from '~pages/home';
import { ServerInfoPage } from '~pages/serverInfo';

export const router = createBrowserRouter([
	{
		path: path.root,
		element: <HomePage />,
		children: [
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
