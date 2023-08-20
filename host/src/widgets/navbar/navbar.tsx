import { routes } from '~shared/index';
import type { FC } from 'react';
import { navbar } from './index.module.css';

import { Link } from 'react-router-dom';

export const NavbarWidget: FC = () => {
	const links = [
		{
			to: routes.users,
			title: 'Users',
		},
		{
			to: routes.signup,
			title: 'Signup Page',
		},
		{
			to: routes.login,
			title: 'Login Page',
		},
	];

	return (
		<nav className={navbar}>
			<ul>
				{links.map(({ to, title }) => (
					<li key={title}>
						<Link to={to}>{title}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
