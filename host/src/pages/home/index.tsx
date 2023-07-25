import { path } from '~pages/router';
import type { FC } from 'react';

import { Link, Outlet } from 'react-router-dom';

export const HomePage: FC = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<h2>Home Page</h2>
			<h3>Home Page</h3>
			<nav>
				<ul>
					<li>
						<Link to={path.serverInfo}>Server Info Page</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};
