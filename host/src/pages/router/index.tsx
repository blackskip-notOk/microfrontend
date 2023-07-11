import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../home';
import { path } from './constants';
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
