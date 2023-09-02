import { HTMLProps, forwardRef } from 'react';

interface IInput extends HTMLProps<HTMLInputElement> {
	error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(({ name, error, ...rest }, ref) => {
	return (
		<>
			<label htmlFor={name}>
				<input ref={ref} aria-invalid={error ? 'true' : 'false'} {...rest} />
			</label>
			{error && <p>{error}</p>}
		</>
	);
});
