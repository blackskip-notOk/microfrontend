import z from 'zod';

export const LoginFormFields = z.enum(['email', 'password']);

export const LoginFormSchema = z.object({
	[LoginFormFields.enum.email]: z.string().trim().min(1).email(),
	[LoginFormFields.enum.password]: z.string().trim().min(3),
}).strict();

export type TLoginForm = z.infer<typeof LoginFormSchema>;
