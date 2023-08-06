import z from 'zod';

export const SignupFormFields = z.enum(['login', 'password']);

export const SignupFormSchema = z.object({
	[SignupFormFields.enum.login]: z.string().trim().min(1).max(20),
	[SignupFormFields.enum.password]: z.string().trim().min(3),
}).strict();

export type TSignupForm = z.infer<typeof SignupFormSchema>;
