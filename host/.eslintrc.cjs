const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	root: true,
	env: { browser: true, es2020: true, node: true },
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
	settings: {
		react: { version: '18.2' },
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx', '.d.ts'],
			},
			typescript: { alwaysTryTypes: true },
			alias: {
				extensions: ['.ts', '.tsx'],
				map: [
					['@package.json', './package.json'],
					['@global', './src/global'],
					['@api', './src/app/api'],
					['@components', './src/app/components'],
					['@helpers', './src/app/helpers'],
					['@hooks', './src/app/hooks'],
					['@modules', './src/app/modules'],
					['@pages', './src/app/pages'],
					['@store', './src/app/store'],
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
	plugins: ['react-refresh', 'react', 'react-hooks', '@tanstack/query', '@typescript-eslint', 'jsx-a11y', 'import'],
	ignorePatterns: ['.eslintrc.cjs'],
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
		'import/no-named-as-default-member': OFF,
		'@typescript-eslint/consistent-type-imports': WARN,
		'@typescript-eslint/no-unused-vars': [ERROR, { ignoreRestSiblings: true }],
		'react-refresh/only-export-components': WARN,
		'@tanstack/query/exhaustive-deps': ERROR,
		'@tanstack/query/prefer-query-object-syntax': ERROR,
	},
};
