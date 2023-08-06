import { useMutation, useQuery } from '@tanstack/react-query';
import ky from 'ky';

import { TUser, keys, usersApi } from '../model';
import { api } from '~global/index';
import { TSignupForm } from '~pages/signup/types';

export function useCreateUser() {
	const userCreateMutation = useMutation<void, unknown, TSignupForm>({
		mutationFn: userData => {
			return ky
				.post(`${api.base}/${usersApi.createUser}`, {
					json: userData,
				})
				.json();
		},
	});

	return userCreateMutation;
}

export function useGetUsers() {
	const users = useQuery<unknown, unknown, TUser[]>({
		queryKey: [keys.users],
		queryFn: () =>
			ky
				.get(`${api.base}/${usersApi.getUsers}`)
				.then(response => response.json())
				.then(data => data),
	});

	return users;
}
