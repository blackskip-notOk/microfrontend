import { path } from '~pages/router';
import type { FC } from 'react';
import {
	container,
	header,
	title,
	navbar,
	content,
	footer,
	color,
	brand,
	text1,
	text2,
	surface1,
	surface2,
	surface3,
	surface4,
} from './index.module.css';

import { Link, Outlet } from 'react-router-dom';

export const HomePage: FC = () => {
	return (
		<main className={container}>
			<header className={header}>
				<h1 className={title}>Home Sweet Home</h1>
			</header>
			<nav className={navbar}>
				<ul>
					<li>
						<Link to={path.serverInfo}>Server Info Page</Link>
					</li>
				</ul>
			</nav>
			<section className={content}>
				<div>
					<div className={[color, brand].join(' ')} />
					<div className={[color, text1].join(' ')} />
					<div className={[color, text2].join(' ')} />
					<div className={[color, surface1].join(' ')} />
					<div className={[color, surface2].join(' ')} />
					<div className={[color, surface3].join(' ')} />
					<div className={[color, surface4].join(' ')} />
				</div>
				<Outlet />
			</section>
			<footer className={footer}>Footer</footer>
		</main>
	);
};
