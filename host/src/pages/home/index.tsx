import { path } from '~pages/router';
import type { FC } from 'react';
import { container, header, title,  navbar, footer } from './index.module.css';

import { Link, Outlet } from 'react-router-dom';

export const HomePage: FC = () => {
	return (
		<main className={container}>
			<header className={header}>
				<h1 className={title} >Home Sweet Home</h1>
			</header>
			<nav className={navbar}>
				<ul>
					<li>
						<Link to={path.serverInfo}>Server Info Page</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
			<footer className={footer}>Footer</footer>
		</main>
	);
};
