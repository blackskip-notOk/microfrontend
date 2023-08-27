import type { FC } from 'react';
import { header, title, rootLink, icon } from './index.module.css';
import { ThemeSwitcher } from '..';
import { NavLink } from 'react-router-dom';
import { routes } from '~shared/index';

export const HeaderWidget: FC = () => {
	return (
		<header className={header}>
			<NavLink
				to={routes.root}
				className={rootLink}
			>
				<img
					src='../../../public/icons/eyes.svg'
					alt='icon with eyes'
					className={icon}
				/>
			</NavLink>
			<h1 className={title}>Home Sweet Home</h1>
			<ThemeSwitcher />
		</header>
	);
};
