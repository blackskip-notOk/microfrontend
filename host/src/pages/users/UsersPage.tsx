import { useSuspenseQuery } from '@apollo/client';
import { FC, Suspense } from 'react';
import { GET_USERS } from '~entities/users/gql';
import { TUser } from '~entities/users/model';

export const UsersPage: FC = () => {
	const { error, data } = useSuspenseQuery<{ users: TUser[] }>(GET_USERS);

	if (error) return `Error! ${error.message}`;

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<section>
				<ul>
					{data.users.map(user => (
						<li key={user.id}>{user.login}</li>
					))}
				</ul>
			</section>
		</Suspense>
	);
};
