import type { FC } from 'react';
import { header, title } from './index.module.css';

export const HeaderWidget: FC = () => {
	return (
		<header className={header}>
			<h1 className={title}>Home Sweet Home</h1>
		</header>
	);
};
