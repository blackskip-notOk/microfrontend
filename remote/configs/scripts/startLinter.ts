import concurrently from 'concurrently';
import inquirer from 'inquirer';

inquirer
	.prompt([
		{
			type: 'list',
			name: 'Linter',
			message: 'What linter do you want to start?',
			choices: ['ESLINT', 'STYLELINT', 'PRETTIER', 'TSC', new inquirer.Separator()],
		},
		{
			type: 'list',
			name: 'Action',
			message: 'What kind of action do you want to start?',
			choices: ['CHECK', 'FIX', new inquirer.Separator()],
			when: ({ Linter }) => Linter !== 'TSC',
		},
	])
	.then((response: { Linter: 'ESLINT' | 'STYLELINT' | 'PRETTIER' | 'TSC'; Action: 'CHECK' | 'FIX' }) => {
		const { Linter, Action } = response;

		const linters = {
			ESLINT: async () => {
				if (Action === 'CHECK') {
					const { result } = concurrently(['npx eslint --color --max-warnings=0 src/']);
					try {
						const response = await result;
						return response;
					} catch (error) {
						return error;
					}
				} else {
					const { result } = concurrently(['npx eslint --fix src/']);
					try {
						const response = await result;
						return response;
					} catch (error) {
						return error;
					}
				}
			},
			STYLELINT: async () => {
				if (Action === 'CHECK') {
					const { result } = concurrently(['npx stylelint --color --max-warnings=0 "**/*.{ts,tsx}"']);
					try {
						const response = await result;
						return response;
					} catch (error) {
						return error;
					}
				} else {
					const { result } = concurrently(['npx stylelint --fix "**/*.{ts,tsx}"']);
					try {
						const response = await result;
						return response;
					} catch (error) {
						return error;
					}
				}
			},
			PRETTIER: async () => {
				if (Action === 'CHECK') {
					const { result } = concurrently(['npx prettier --check --loglevel=warn src/']);
					try {
						const response = await result;
						return response;
					} catch (error) {
						return error;
					}
				} else {
					const { result } = concurrently(['npx prettier --write --ignore-unknown src/']);
					try {
						const response = await result;
						return response;
					} catch (error) {
						return error;
					}
				}
			},
			TSC: async () => {
				const { result } = concurrently(['npx tsc --generateTrace --verbose --diagnostics --pretty']);
				try {
					const response = await result;
					return response;
				} catch (error) {
					return error;
				}
			},
		};

		return linters[Linter]();
	})
	.catch(error => {
		if (error.isTryError) {
			console.log('Prompt could not be rendered in the current environment');
		} else {
			console.log('Something else went wrong');
		}
	});
