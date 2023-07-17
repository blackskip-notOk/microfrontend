const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	root: true,
	env: { browser: true, es2023: true, node: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@tanstack/query', '@typescript-eslint', 'jsx-a11y', 'import'],
	settings: {
		react: { version: '18.2' },
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.d.ts'],
			},
			typescript: { alwaysTryTypes: true },
			alias: {
				extensions: ['.ts', '.tsx', '.d.ts'],
				map: [
					['@package.json', './package.json'],
					['@global', './src/global'],
					['@app', './src/app/app'],
					['@pages', './src/pages'],
					['@features', './src/features'],
					['@entities', './src/entities'],
					['@shared', './src/shared'],
					['@tests', './src/__tests__'],
					['@', './src/'],
					['~', './public/'],
				],
			},
		},
		'import/parsers': {
			'@typescript-eslint/parser': [ERROR, ['.ts', '.tsx', '.d.ts']],
		},
	},
	ignorePatterns: ['.eslintrc.cjs'],
	overrides: [
		{
			files: ['**/__tests__/*.{t}s?(x)', '**/*.spec.{t}s?(x)'],
			extends: [
				'plugin:vitest-globals/recommended',
				'plugin:testing-library/react',
				'plugin:jest-dom/recommended',
			],
			env: {
				'vitest-globals/env': true,
			},
		},
	],
	rules: {
		'react-hooks/rules-of-hooks': ERROR,
		'react-hooks/exhaustive-deps': WARN,
		'import/no-unresolved': ERROR,
		'@typescript-eslint/no-explicit-any': ERROR,
		quotes: [ERROR, 'single', { avoidEscape: true }],
		'jsx-quotes': [ERROR, 'prefer-single'],
		'sort-vars': [WARN, { ignoreCase: true }],
		'spaced-comment': [WARN, 'always', { exceptions: ['-', '+'], markers: ['/'] }],
		'object-curly-spacing': [WARN, 'always'],
		semi: [WARN, 'always'],
		'keyword-spacing': [WARN],
		'react/jsx-sort-props': [
			WARN,
			{
				shorthandFirst: true,
				callbacksLast: true,
				ignoreCase: true,
			},
		],
		'import/order': [
			WARN,
			{
				groups: ['builtin', 'external', 'internal'],
				pathGroups: [
					{
						pattern: 'react',
						group: 'external',
						position: 'before',
					},
				],
				pathGroupsExcludedImportTypes: ['react'],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
		'@typescript-eslint/consistent-type-imports': WARN,
		'@typescript-eslint/no-unused-vars': [ERROR, { ignoreRestSiblings: true }],
		'@tanstack/query/exhaustive-deps': ERROR,
		'@tanstack/query/prefer-query-object-syntax': ERROR,
	},
};
