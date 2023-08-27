import { FC, FormEvent, useState } from 'react';
import { switcher, legend, radio, status, light, dark, auto } from './index.module.css';

export const ThemeSwitcher: FC = () => {
	const isBrowserPreferDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

	const setDEfaultTheme = () => {
		const savedTheme = localStorage.getItem('theme');
		const browserDefault = isBrowserPreferDarkTheme ? 'dark' : 'light';

		savedTheme && document.documentElement.setAttribute('data-theme', savedTheme);

		return savedTheme ?? browserDefault;
	};

	const [theme, setTheme] = useState<string | null>(setDEfaultTheme);

	const handleClick = (event: FormEvent<HTMLFieldSetElement>) => {
		const target = event.target as HTMLInputElement;

		target.value === 'auto' ? localStorage.removeItem('theme') : localStorage.setItem('theme', target.value);

		setTheme(target.value);

		document.documentElement.setAttribute('data-theme', target.value);
	};

	const options = [
		{
			className: `${radio} ${light}`,
			value: 'light',
		},
		{
			className: `${radio} ${auto}`,
			value: 'auto',
		},
		{
			className: `${radio} ${dark}`,
			value: 'dark',
		},
	];

	return (
		<fieldset
			className={switcher}
			onChange={handleClick}
		>
			<legend className={legend}>Theme</legend>
			{options.map(({ className, value }) => (
				<input
					key={value}
					type='radio'
					name='color-theme'
					value={value}
					className={className}
					aria-label={value}
					checked={value === theme}
				/>
			))}
			<div className={status} />
		</fieldset>
	);
};
