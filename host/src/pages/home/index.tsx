import type { FC } from 'react';
import { container, content } from './index.module.css';

import { Outlet } from 'react-router-dom';
import { HeaderWidget } from '~widgets/header';
import { NavbarWidget } from '~widgets/navbar';
import { FooterWidget } from '~widgets/footer';

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
