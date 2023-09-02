import type { FC } from 'react';
import { container, content } from './index.module.css';
import { StartPage } from 'remoteApp/StartPage';

import { Outlet } from 'react-router-dom';
import { HeaderWidget, FooterWidget, NavbarWidget } from '~widgets/index';

export const HomePage: FC = () => {
	return (
		<main className={container}>
			<HeaderWidget />
			<NavbarWidget />
			<section className={content}>
				<StartPage />
				<Outlet />
			</section>
			<FooterWidget />
		</main>
	);
};
