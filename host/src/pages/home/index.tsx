import { path } from '~pages/router';
import type { FC } from 'react';
import styles from './index.module.css';

import { Link, Outlet } from 'react-router-dom';

export const HomePage: FC = () => {
	return (
		<main className={styles.container}>
			<h1 className={styles.title}>Home Sweet Home</h1>
			<h5>Home Page 🍊 🏯</h5>
			<nav>
				<ul>
					<li>
						<Link to={path.serverInfo}>Server Info Page</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</main>
	);
};
