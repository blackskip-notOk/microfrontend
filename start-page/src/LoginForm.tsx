import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormFields, LoginFormSchema, TLoginForm } from './types';
import { loginFormDefaultValues } from './constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from 'remoteInput/Input';

export function LoginForm() {
	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<TLoginForm>({
		defaultValues: loginFormDefaultValues,
		delayError: 500,
		resolver: zodResolver(LoginFormSchema),
	});

	const onSubmit: SubmitHandler<TLoginForm> = (data) => console.log(data);

	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input error={errors.email} type='email' {...register(LoginFormFields.enum.email)} />
				{/* <label htmlFor={LoginFormFields.enum.email}>
					<input
						type='email'
						aria-invalid={errors.email ? 'true' : 'false'}
						{...register(LoginFormFields.enum.email)}
					/>
				</label>
				<span role='alert'>{errors.email?.message}</span>
				<label htmlFor={LoginFormFields.enum.password}>
					<input
						type='password'
						aria-invalid={errors.password ? 'true' : 'false'}
						{...register(LoginFormFields.enum.password)}
					/>
				</label>
				<span role='alert'>{errors.password?.message}</span> */}
				<button type='submit'>Login</button>
			</form>
		</section>
	);
}
