import type { FC } from 'react';
import { container, content, icon } from './index.module.css';

import { NavLink, Outlet } from 'react-router-dom';
import { HeaderWidget, FooterWidget, NavbarWidget } from '~widgets/index';
import { routes } from '~shared/index';

export const HomePage: FC = () => {
	return (
		<main className={container}>
			<NavLink to={routes.root}>
				<img
					src='../../../public/favicon.svg'
					alt='icon with eyes'
					className={icon}
				/>
			</NavLink>
			<HeaderWidget />
			<NavbarWidget />
			<section className={content}>
				<Outlet />
			</section>
			<FooterWidget />
		</main>
	);
};
