import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SignupFormFields, SignupFormSchema, TSignupForm } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormDefaultValues } from './constants';
import { useCreateUser, useGetUsers } from '~entities/users/api';

export const SignupPage: FC = () => {
	const { data } = useGetUsers();

	const { mutate } = useCreateUser();

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<TSignupForm>({
		defaultValues: loginFormDefaultValues,
		delayError: 500,
		resolver: zodResolver(SignupFormSchema),
	});

	const onSubmit: SubmitHandler<TSignupForm> = formData => {
		mutate(formData);
	};

	return (
		<section>
			{data?.length &&
				data.map(user => {
					return <div>{user.login}</div>;
				})}
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor={SignupFormFields.enum.login}>
					<input
						aria-invalid={errors.login ? 'true' : 'false'}
						{...register(SignupFormFields.enum.login)}
					/>
				</label>
				<span role='alert'>{errors.login?.message}</span>
				<label htmlFor={SignupFormFields.enum.password}>
					<input
						type='password'
						aria-invalid={errors.password ? 'true' : 'false'}
						{...register(SignupFormFields.enum.password)}
					/>
				</label>
				<span role='alert'>{errors.password?.message}</span>
				<button type='submit'>Login</button>
			</form>
		</section>
	);
};
