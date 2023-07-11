import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const HomePage: FC = () => {
	return (
		<div>
			<h1>Home Page</h1>
			<nav>
				<ul>
					<li>
						<Link to='/server_info'>Server Info Page</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};
