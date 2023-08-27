import type { FC } from 'react';
import { container, content } from './index.module.css';

import { Outlet } from 'react-router-dom';
import { HeaderWidget, FooterWidget, NavbarWidget } from '~widgets/index';

export const HomePage: FC = () => {
	return (
		<main className={container}>
			<HeaderWidget />
			<NavbarWidget />
			<section className={content}>
				<Outlet />
			</section>
			<FooterWidget />
		</main>
	);
};
