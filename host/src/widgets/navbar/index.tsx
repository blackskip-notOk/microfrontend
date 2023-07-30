import { path } from '~pages/router';
import type { FC } from 'react';
import { navbar } from './index.module.css';

import { Link } from 'react-router-dom';

export const NavbarWidget: FC = () => {
	return (
		<nav className={navbar}>
			<ul>
				<li>
					<Link to={path.login}>Login Page</Link>
				</li>
				<li>
					<Link to={path.serverInfo}>Server Info Page</Link>
				</li>
			</ul>
		</nav>
	);
};
