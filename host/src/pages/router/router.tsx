import { createBrowserRouter } from 'react-router-dom';

import { path } from './constants';
import { HomePage } from '../home';
import { ServerInfo } from '../serverInfo';

export const router = createBrowserRouter([
	{
		path: path.root,
		element: <HomePage />,
		children: [
			{
				path: path.serverInfo,
				element: <ServerInfo />,
			},
		],
	},
]);
