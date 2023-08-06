export const keys = {
	users: 'users',
} as const;

export const usersApi = {
	createUser: 'users/create-user',
	getUsers: 'users',
};

export type TUser = {
	id: number,
	login: string,
	password: string,
}
