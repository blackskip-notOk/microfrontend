import path from 'path';

import type { AliasOptions } from 'vite';

export const viteAliases: AliasOptions = [
	{ find: '~package.json', replacement: path.resolve(__filename, '../../package.json') },
	{ find: '~global', replacement: path.resolve(__dirname, '../../src/global') },
	{ find: '~app', replacement: path.resolve(__dirname, '../../src/app') },
	{ find: '~pages', replacement: path.resolve(__dirname, '../../src/pages') },
    { find: '~widgets', replacement: path.resolve(__dirname, '../../src/widgets') },
    { find: '~features', replacement: path.resolve(__dirname, '../../src/features') },
	{ find: '~entities', replacement: path.resolve(__dirname, '../../src/entities') },
	{ find: '~shared', replacement: path.resolve(__dirname, '../../src/shared') },
	{ find: '~tests', replacement: path.resolve(__dirname, '../../src/__tests__') },
	{ find: '~', replacement: path.resolve(__dirname, '../../src') },
	{ find: '#', replacement: path.resolve(__dirname, '../../public') },
];